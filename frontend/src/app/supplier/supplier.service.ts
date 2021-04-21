import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {Supplier} from "./supplier";
import {Product} from "./product";

//TODO: baseUrl храним в енвайронмент ts
const baseUrl = "http://localhost:8090/api/suppliers/"
@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<HttpResponse<Supplier[]>>{
    return this.http.get<Supplier[]>(baseUrl, {observe: 'response'});
  }

  getProductsBySupplier(): Observable<HttpResponse<Product[]>>{
    return this.http.get<Product[]>(baseUrl, {observe: 'response'});
  }

  getSupplierIdByName(supplierName: string): Observable<HttpResponse<number>>{
    return this.http.get<number>(baseUrl+"name/", {observe: "response", params: new HttpParams().set("name", supplierName)})
  }
}
