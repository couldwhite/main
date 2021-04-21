import { Injectable } from '@angular/core'
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Order} from "./order";
import {Observable} from "rxjs";
// TODO: почему разный урл у сервисов?
const baseUrl = "http://localhost:9090/api/orders/"
@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: Order): Observable<HttpResponse<Order>>{
    return this.http.post<Order>(baseUrl, order, {observe: "response"})
  }

  getAllOrders(): Observable<HttpResponse<Order[]>>{
    return  this.http.get<Order[]>(baseUrl, {observe: 'response'});
  }
}
