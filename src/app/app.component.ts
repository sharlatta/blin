import {Component} from '@angular/core';

import {OrderItem} from './order-item/order-item.component';


const ITEMS: OrderItem[] = [
    {
        image: 'assets/strawberry.jpg',
        description: 'Нежнейшый блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
    },
    {
        image: 'assets/ikra.jpg',
        description: 'Нежнейшый блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
    },
    {
        image: 'assets/chocolate.jpg',
        description: 'Нежнейшый блины с клубникой. Лучший завтрак для  вас и Вашей семьи'
    }
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    items = ITEMS;
}
