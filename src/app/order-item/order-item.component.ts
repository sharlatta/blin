import {Component, OnInit, Input} from '@angular/core';

export class OrderItem {
    description: string;
    image: string;
}

@Component({
    selector: 'app-order-item',
    templateUrl: './order-item.component.html',
    styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @Input() item: OrderItem;

}
