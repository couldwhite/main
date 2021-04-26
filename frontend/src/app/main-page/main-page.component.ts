import { Component, OnInit } from '@angular/core';
import {Supplier} from "../supplier/supplier";
import {Order} from "../order/order";
import {SupplierService} from "../supplier/supplier.service";
import {ProductService} from "../supplier/product.service";
import {OrderService} from "../order/order.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  addressControl: FormControl;
  suppliers: Supplier[];
  suppliersList: string[];
  productsList: string[];
  productName = "";
  supplierName = "";
  supplierId: number | null = -1;
  customerId = 1;
  inputAddress = "";
  order: Order;
  private productId: number | null = -1;
  constructor(private supplierService: SupplierService,
              private productService: ProductService,
              private orderService: OrderService) {
    this.suppliers = [];
    this.suppliersList = new Array<string>();
    this.productsList = new Array<string>();
    this.order = new Order();
    this.addressControl = new FormControl();
  }
  ngOnInit() {
    this.loadSuppliers();

  }

  private loadSuppliers() {
    this.supplierService.getAllSuppliers().subscribe(data=>
      ((data.body?.map(el=>{
        this.suppliersList?.push(el.name);
      }))));
  }

  choiceSupplier(event: any){
    this.supplierName = event.innerText;

    this.productsList = [];
    this.productService.getProductBySupplierName(event.innerText).subscribe(data=>
      ((data.body?.map(el=>
        this.productsList?.push(el.name)
      ))));
    this.supplierService.getSupplierIdByName(this.supplierName).subscribe(num => (
      this.supplierId = num.body
    ));
  }

  choiceProduct(event: any){
    this.productName = event.innerText;
    this.productService.getProductIdByName(this.productName).subscribe(num => (
      this.productId = num.body
    ));
  }

  createOrder(){
    this.inputAddress = this.addressControl.value;
    console.log(this.supplierId, this.productId, this.inputAddress);
    this.order.productId = this.productId;
    this.order.supplierId = this.supplierId;
    this.order.arrivedCity = this.inputAddress;
    this.orderService.createOrder(this.order).subscribe();
  }

}
