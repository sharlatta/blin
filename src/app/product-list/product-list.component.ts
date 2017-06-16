import { Component, Input } from '@angular/core';
import {OrderItem} from './../order-item/order-item.component';

export class ProductList {
  list: OrderItem[];
}


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent {

  @Input() list: ProductList;
  @Input() isSweetSection: boolean;
  @Input() isSaltySection: boolean;
  @Input() title: string;
}


