import {Component} from '@angular/core';

import {OrderItem} from './order-item/order-item.component';


const ITEMS: OrderItem[] = [
    {
        image: 'assets/strawberry.jpg',
        title: 'Клубника',
        description: 'Нежнейшый блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
    },
    {
        image: 'assets/ikra.jpg',
        title: 'Икра',
        description: 'Нежнейшый блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
    },
    {
        image: 'assets/chocolate.jpg',
        title: 'Шоколад',
        description: 'Нежнейшый блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
    }
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    items = ITEMS;
}
