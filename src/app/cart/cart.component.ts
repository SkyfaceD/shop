import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { firstDelimiter, normalize } from '../utils/number.helper';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  formGroup: FormGroup = null;

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

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
      count: 1,
    },
    {
      id: '7511-9734',
      title: 'Оливки',
      img:
        'https://image.freepik.com/free-photo/black-olives-on-a-tree_82893-9759.jpg',
      price: 1569,
      count: 1,
    },
    {
      id: '7323-9734',
      title: 'Пшеница',
      img:
        'https://сельхозпортал.рф/wp-content/uploads/2017/12/kolos_yarovoy_pshenici.jpeg',
      price: 999,
      count: 1,
    },
  ];

  initForm() {
    const controls = [];
    for (let index = 0; index < this.items.length; index++) {
      const control = new FormControl(1);
      control.registerOnChange(() => {
        console.log(control.value);
      });
      controls.push(control);
    }
    this.formGroup = new FormGroup({
      items: new FormArray(controls),
    });
  }

  removeItem(index) {
    this.items.splice(index, 1);
  }

  removeAll() {
    this.items = [];
  }

  changeItemCount(event, index) {
    const value = event.target.value.trim();

    if (!firstDelimiter(value)) {
      (this.formGroup.get('items') as FormArray).at(index).setValue(Number(normalize(value)));
    } else {
      (this.formGroup.get('items') as FormArray).at(index).setValue(Number(value) || 1);
    }
  }

  getCount(index){
    return (this.formGroup.get('items') as FormArray).at(index).value
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
