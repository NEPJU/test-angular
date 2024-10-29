import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// กำหนดโครงสร้างข้อมูลที่ตรงกับ API
export interface Product {
  ProductID: number;
  ProductName: string;
  ProductDescription: string;
  ProductPrice: number;
  ProductQuantity: number;
  ProductCategory: string;
  ProductSaleCount: number;
  AverageRating: number;
  Images: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/products';  // URL ของ API

  constructor(private http: HttpClient) { }

  // ฟังก์ชันดึงข้อมูลสินค้าทั้งหมด
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
}
