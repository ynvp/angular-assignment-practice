import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../assignment8/product.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}
    
    getAllProducts(): Observable<any> {
        return this.http.get('https://dummyjson.com/products');
    }
}