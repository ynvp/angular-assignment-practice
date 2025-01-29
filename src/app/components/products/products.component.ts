import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
    selector: 'app-products',
    imports: [],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
})
export class ProductsComponent {
    products: any;
    httpClient = inject(HttpClient);

    ngOnInit() {
        const productsUrl = 'https://fakestoreapi.com/products';
        this.httpClient.get(productsUrl).subscribe((response) => {
            this.products = response;
        });
    }
}
