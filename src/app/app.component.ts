import {Component} from '@angular/core';
import {OrderItem} from './order-item/order-item.component';
import {ProductListComponent} from './product-list/product-list.component';

const SWEET: OrderItem[] = [
  {
    image: 'assets/strawberry.jpg',
    title: 'Клубника',
    description: 'Нежные блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
  },
  {
    image: 'assets/chocolate.jpg',
    title: 'Шоколад',
    description: 'Нежные блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
  },
  {
    image: 'assets/jam.jpg',
    title: 'С вареньем',
    description: 'Нежные блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
  }
];



const SALTY: OrderItem[] = [

  {
    image: 'assets/zhulien.jpg',
    title: 'Жульен',
    description: 'Нежные блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
  },
  {
    image: 'assets/ikra.jpg',
    title: 'C лососем и сыром филадельфия',
    description: 'Нежные блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
  },
  {
    image: 'assets/meat.jpg',
    title: 'C мясом',
    description: 'Нежные блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  sweet = SWEET;
  salty = SALTY;
}
