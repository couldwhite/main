import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order/order.service";
import {Order} from "../order/order";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orderList: Order[];

  constructor(private orderService: OrderService) {
    this.orderList = new Array<Order>();
  }

  ngOnInit(): void {
    this.loadOrders();

  }

  private loadOrders(){
    this.orderService.getAllOrders().subscribe(data=>
      ((data.body?.map(el=>{
        this.orderList?.push(el);
        console.log(el)
      }))))
  }
}
