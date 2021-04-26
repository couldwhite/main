import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductBySupplierName(supplierName: string): Observable<HttpResponse<Product[]>>{
    return this.http.get<Product[]>(environment.baseUrl+"api/products/", {observe: "response", params: new HttpParams().set("name", supplierName)})
  }

  getProductIdByName(productName: string): Observable<HttpResponse<number>>{
    return this.http.get<number>(environment.baseUrl+"api/products/name/", {observe: "response", params: new HttpParams().set("name", productName)})
  }
}
