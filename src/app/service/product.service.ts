import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/Store/Model/Product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseURL = "http://localhost:3000"
  constructor(private http:HttpClient) { }
  GetAllProducts(){
    return this.http.get<Product[]>(this.baseURL+'/products')
  }
}
