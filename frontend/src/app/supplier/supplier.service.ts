import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";
import {Supplier} from "./supplier";
import {Product} from "./product";
import {environment} from "../../environments/environment"

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<HttpResponse<Supplier[]>>{
    return this.http.get<Supplier[]>(environment.baseUrl+"api/suppliers/", {observe: 'response'});
  }

  getSupplierIdByName(supplierName: string): Observable<HttpResponse<number>>{
    return this.http.get<number>(environment.baseUrl+"api/suppliers/name/", {observe: "response", params: new HttpParams().set("name", supplierName)})
  }
}
