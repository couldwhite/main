import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "./product";

const baseUrl = "http://localhost:8090/api/products/";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductBySupplierName(supplierName: string): Observable<HttpResponse<Product[]>>{
    return this.http.get<Product[]>(baseUrl, {observe: "response", params: new HttpParams().set("name", supplierName)})
  }

  getProductIdByName(productName: string): Observable<HttpResponse<number>>{
    return this.http.get<number>(baseUrl+"name/", {observe: "response", params: new HttpParams().set("name", productName)})
  }
}
