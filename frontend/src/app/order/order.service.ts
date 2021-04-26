import { Injectable } from '@angular/core'
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Order} from "./order";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<HttpResponse<Order>>{
    return this.http.post<Order>(environment.baseUrl+"api/orders/", order, {observe: "response"})
  }

  getAllOrders(): Observable<HttpResponse<Order[]>>{
    return  this.http.get<Order[]>(environment.baseUrl+"api/orders/all", {observe: 'response'});
  }
}
