import { Component, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  imageClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    "https://i.guim.co.uk/img/media/ff22cbe9970c0a7eb15444bd664be3246bf4807c/111_69_2241_1345/master/2241.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=331b949f40aade530f00dc898c6a030c",
    "https://techcrunch.com/wp-content/uploads/2019/04/cowboy_bebop.jpg?w=709",
    "https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41598-020-60439-y/MediaObjects/41598_2020_60439_Fig1_HTML.png",
    "https://insidethemagic-119e2.kxcdn.com/wp-content/uploads/2019/07/16-9-800x400.jpeg",
    "https://lh3.googleusercontent.com/proxy/eIohvOaVsDdvZPUSpwCj92MbOUy5wdm9T1b21Relmq0GXnhDk607PUkzTFTllXthrLy5e-9CBwT33IQU9XHER7HEosRt5VmKlkiWgetsAJqWWW_hbgVbToNq00Zy1yEvZs6Tg5WwXkaMFiSJgb8UjWIfe9iGs8sMBIvRvXmUayvczz9nUVT50pW8wx-KI1Sm7hWM-vn4L2N_P032FiqN9m_oA42LJX6eQ0oJb6YdYksfpYidcqB_fEVbCfje_qpSpSt3_Q-VSZddG-qwIqdprm09uNQzOg"
  ]
  currentImg = this.images[0]

  items = [
    { 
      key: "Тип подключения",
      value: "Проводное"
    },
    { 
      key: "Тип оборудования",
      value: "Гарнитура"
    },
    { 
      key: "Конструкция",
      value: "Внутриканальные"
    }
  ]

  items2 = [
    { 
      key: "Тип подключения",
      value: "Проводное"
    },
    { 
      key: "Тип оборудования",
      value: "Гарнитура"
    },
    { 
      key: "Конструкция",
      value: "Внутриканальные"
    },
    { 
      key: "Тип подключения",
      value: "Проводное"
    },
    { 
      key: "Тип оборудования",
      value: "Гарнитура"
    },
    { 
      key: "Конструкция",
      value: "Внутриканальные"
    },
    { 
      key: "Тип подключения",
      value: "Проводное"
    },
    { 
      key: "Тип оборудования",
      value: "Гарнитура"
    },
    { 
      key: "Конструкция",
      value: "Внутриканальные"
    },
    { 
      key: "Тип подключения",
      value: "Проводное"
    },
    { 
      key: "Тип оборудования",
      value: "Гарнитура"
    },
    { 
      key: "Конструкция",
      value: "Внутриканальные"
    },
    { 
      key: "Тип подключения",
      value: "Проводное"
    },
    { 
      key: "Тип оборудования",
      value: "Гарнитура"
    },
    { 
      key: "Конструкция",
      value: "Внутриканальные"
    },
    { 
      key: "Тип подключения",
      value: "Проводное"
    },
    { 
      key: "Тип оборудования",
      value: "Гарнитура"
    },
    { 
      key: "Конструкция",
      value: "Внутриканальные"
    },
    { 
      key: "Тип подключения",
      value: "Проводное"
    },
    { 
      key: "Тип оборудования",
      value: "Гарнитура"
    },
    { 
      key: "Конструкция",
      value: "Внутриканальные"
    },
  ]

  price = 200
  priceAsRuble = Math.round(this.price / 5.55)
  priceAsDollar = Math.round(this.price / 427.92)
  priceAsEuro = Math.round(this.price / 507.01)

  index = 0;
  config  = {
    navigation: true,
    slidesPerView: 3,
    slidesOffsetBefore: 24,
    slidesOffsetAfter: 24
  }

  onClickMe(item: string){
    this.currentImg = item
  }

  openPreview(): void {
    this.imageClick.emit({
      url: this.currentImg,
      alt: " "
    });
  }
}
