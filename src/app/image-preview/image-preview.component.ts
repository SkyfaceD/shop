import { Component, OnInit, AfterViewInit, Input, EventEmitter, HostListener, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

interface IPosition {
  x: number;
  y: number;
}

const normalize = (min, max, value) => {
	return (value - min) / (max - min);
};

const lerp = (min, max, value) => {
	return (1 - value) * min + value * max;
};

const map = (minSource, maxSource, minTarget, maxTarget, value) => {
	return lerp(minTarget, maxTarget, normalize(minSource, maxSource, value));
};

const clamp = (min, max, value) => {
	return Math.max(min, Math.min(value, max));
};

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent implements OnInit, AfterViewInit {
  url: string = null;
  alt: string = null;
  zoomContext: CanvasRenderingContext2D = null;
  smoothingEnabled = true;

  mouse: IPosition = { x: null, y: null };
  camera: IPosition = { x: null, y: null };

  maxZoomSize = 250;
  currentZoomSize = 0;

  scaleStep = 0.5;
  currentScale = 1.5;

  isMouseEnter = false;

  animationDuration = 125;
  startTime = null;

  @Input() imageClickEmitter: EventEmitter<any>;
  @ViewChild('image', { static: false }) imageContainer: ElementRef;
  @ViewChild('zoom', { static: false }) zoomContainer: ElementRef;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.changeDetector.detectChanges();

    this.imageClickEmitter.subscribe((data) => {
      this.url = data.url;
      this.alt = data.alt;
    });
  }

  ngAfterViewInit(): void {
    this.zoomContext = this.zoomContainer.nativeElement.getContext('2d');
  }

  getZoomX(): string {
    if (this.zoomContainer) {
      const zoom = this.zoomContainer.nativeElement;

      return `${this.mouse.x - zoom.width / 2}px`;
    } else {
      return null;
    }
  }

  getZoomY(): string {
    if (this.zoomContainer) {
      const zoom = this.zoomContainer.nativeElement;

      return `${this.mouse.y - zoom.height / 2}px`
    } else {
      return null;
    }
  }

  imageMouseEnter(event): void {
    this.isMouseEnter = true;

		requestAnimationFrame(this.updateZoom.bind(this));
  }

  imageMouseLeave(event): void {
    this.isMouseEnter = false;

		requestAnimationFrame(this.updateZoom.bind(this));
  }

  imageMouseMove(event): void {
    this.updatePositions(event.clientX, event.clientY);

		requestAnimationFrame(this.updateZoom.bind(this));
  }

  imageClick(event): void {
    event.preventDefault();
    event.stopPropagation();

		this.currentScale = Math.max(1 + this.scaleStep, Math.min(this.currentScale + this.scaleStep, 10));

		this.updatePositions(event.clientX, event.clientY);
		requestAnimationFrame(this.updateZoom.bind(this));
  }

  imageContextMenu(event): void {
    event.preventDefault();
    event.stopPropagation();

		this.currentScale = Math.max(1 + this.scaleStep, Math.min(this.currentScale - this.scaleStep, 10));

		this.updatePositions(event.clientX, event.clientY);
		requestAnimationFrame(this.updateZoom.bind(this));
  }

  imageWheel(event): void {
    event.preventDefault();
    event.stopPropagation();

    const direction = Math.sign(event.deltaY * -1);

		this.currentScale = Math.max(1 + this.scaleStep, Math.min(this.currentScale + this.scaleStep * direction, 10));

		this.updatePositions(event.clientX, event.clientY);
		requestAnimationFrame(this.updateZoom.bind(this));
  }

  toggleSmoothing(event): void {
    event.stopPropagation();
  }

  private toggleZoomSize(coefficient): void {
    this.currentZoomSize = this.maxZoomSize * coefficient;
  }

  private updatePositions(x, y) {
    const { x: offsetX, y: offsetY } = this.imageContainer.nativeElement.getBoundingClientRect();

    [this.mouse.x, this.mouse.y] = [x, y];
    [this.camera.x, this.camera.y] = [x - offsetX, y - offsetY];
  }

  private updateZoom(time): void {
    const image = this.imageContainer.nativeElement;
    const zoom = this.zoomContainer.nativeElement;

    const x = map(0, image.width, 0, image.naturalWidth, this.camera.x);
    const y = map(0, image.height, 0, image.naturalHeight, this.camera.y);
    const ratioX = image.width / image.naturalWidth;
    const ratioY = image.height / image.naturalHeight;
    const horizontalOffset = (zoom.width / 2) / (this.currentScale * ratioX);
    const verticalOffset = (zoom.height / 2) / (this.currentScale * ratioY);

    if (this.isMouseEnter) {
      if (this.currentZoomSize < this.maxZoomSize) {
        if (this.startTime === null) {
          this.startTime = time;
        }

        this.toggleZoomSize(clamp(
          0,
          1,
          map(this.startTime, this.startTime + this.animationDuration, 0, 1, time)
        ));

        requestAnimationFrame(this.updateZoom.bind(this));
      } else {
        this.startTime = null;
      }
    } else {
      if (this.currentZoomSize !== 0) {
        if (this.startTime === null) {
          this.startTime = time;
        }

        this.toggleZoomSize(clamp(
          0,
          1,
          map(this.startTime, this.startTime + this.animationDuration, 1, 0, time)
        ));

        requestAnimationFrame(this.updateZoom.bind(this));
      } else {
        this.startTime = null;
      }
    }

    zoom.style.setProperty('--x', this.getZoomX());
    zoom.style.setProperty('--y', this.getZoomY());

    this.zoomContext.save();

    if (this.smoothingEnabled) {
      this.zoomContext.imageSmoothingEnabled = true;
      this.zoomContext.imageSmoothingQuality = 'high';
    } else {
      this.zoomContext.imageSmoothingEnabled = false;
    }

    const clipPath = new Path2D();
    clipPath.arc(zoom.width / 2, zoom.height / 2, this.currentZoomSize / 2, 0, Math.PI * 2);

    this.zoomContext.clip(clipPath);

    this.zoomContext.fillStyle = '#424242';
    this.zoomContext.fill(clipPath);

    this.zoomContext.drawImage(
      image,
      x - horizontalOffset, y - verticalOffset,
      horizontalOffset * 2, verticalOffset * 2,
      0, 0,
      zoom.width, zoom.height
    );

    this.zoomContext.lineWidth = 2;
    this.zoomContext.strokeStyle = '#ffffff';
    this.zoomContext.stroke(clipPath);

    this.zoomContext.restore();
  }

  close() {
    this.currentScale = 1.5;
    this.url = null;
    this.alt = null;
  }
}