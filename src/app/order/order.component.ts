import { Component, OnInit } from '@angular/core';
import { PaymentType } from '../utils/enums';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor() {}

  deliveryTypes = [
    {
      title: 'Самовывоз',
      description: 'Самовывоз со склада компании.',
      imgPath: 'pickup',
      price: 0,
    },
    {
      title: 'Доставка',
      description:
        'Доставка по адресу в назначенные менеджером день и время. Доставку осуществляют курьеры «Белого Ветра» или партнерских компаний. Срок доставки указан при условии наличия товара в Вашем регионе. Возможность доставки в день оформления заказа уточняйте у менеджера.\n\rДоставка товара осуществляется с 11:00 до 18:30.',
      imgPath: 'delivery',
      price: 1500,
    },
  ];
  delivery = 0;

  paymentTypes = [
    {
      id: PaymentType.Card,
      title: 'Оплата онлайн',
      description: 'Оплата банковскими картами: Kaspi Bank, Народный банк, Сбербанк и других банков через процессинговый центр АО «Народный банк Казахстана» epay.kkb.kz. Для получения заказа необходимо удостоверение личности.\r\nНа время карантина советуем воспользоваться данным бесконтактным способом оплаты.',
      img: 'cards',
      available() {
        return true;
      },
    },
    {
      id: PaymentType.Qiwi,
      title: 'Оплата через QIWI',
      description: 'Оплата через терминалы QIWI и QIWI кошелек. Оплата возможна только в статусах «Доступен», «Ожидает отправки в регион», «Готов к тестированию», «Готов к отправке» или «В резерве (курьер)». Для получения заказа необходимо удостоверение личности.\r\nНа время карантина советуем воспользоваться данным бесконтактным способом оплаты.',
      img: 'qiwi',
      available() {
        return true;
      },
    },
    {
      id: PaymentType.Cash,
      title: 'Наличный расчет',
      description: 'Оплата курьеру наличными при получении заказа.',
      img: 'cash',
      available(delivery) {
        return delivery === 1;
      },
    },
  ];
  paymentItem = PaymentType.Card;

  get currentPayment() {
    return this.paymentTypes.find((it) => it.id === this.paymentItem);
  }

  summary = 0;
  items = [
    {
      id: '7523-9734',
      title: 'Шрек',
      img: 'https://www.kinonews.ru/insimgs/2017/newsimg/newsimg75127.jpg',
      price: 200000,
      count: 1,
    },
    {
      id: '7523-2234',
      title: 'Черри',
      img: 'https://abekker.by/uploads/products/tomat-cherri-olivka-semena.jpg',
      price: 300,
      count: 3,
    },
    {
      id: '7511-9734',
      title: 'Оливки',
      img:
        'https://image.freepik.com/free-photo/black-olives-on-a-tree_82893-9759.jpg',
      price: 1569,
      count: 5,
    },
    {
      id: '7323-9734',
      title: 'Пшеница',
      img:
        'https://сельхозпортал.рф/wp-content/uploads/2017/12/kolos_yarovoy_pshenici.jpeg',
      price: 999,
      count: 12,
    },
  ];

  ngOnInit(): void {
    this.initSummary();
  }

  initSummary() {
    this.items.forEach((item) => {
      this.summary += item.count * item.price;
    });
  }

  selectDeliveryType(index) {
    if (!this.currentPayment.available(index)) {
      this.paymentItem = PaymentType.Card;
    }
    this.delivery = index;
  }

  da(event) {
    this.paymentItem = event.value;
  }
}
