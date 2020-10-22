import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { RequestService } from './config/request.service';
import { DetailComponent } from './detail/detail.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { OrderComponent } from './order/order.component';
import { IMaskModule } from 'angular-imask';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [AppComponent, CartComponent, HomeComponent, DetailComponent, ImagePreviewComponent, OrderComponent],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    IMaskModule
  ],
  providers: [
    RequestService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
