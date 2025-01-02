import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from './product.model';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
    selector: 'app-assignment8',
    imports: [NgxPaginationModule],
    templateUrl: './assignment8.component.html',
    styleUrl: './assignment8.component.css',
})
export class Assignment8Component implements OnInit {
    productService = inject(ProductService);
    products!: Product[];
    allProducts!: Product[];
    apiData: any;
    page: any;

    ngOnInit() {
        this.productService.getAllProducts().subscribe((response) => {
            this.products = response.products;
            this.allProducts = response.products;
        });
    }

    searchProducts(searchTerm: string) {
        this.products = this.allProducts.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    sortProducts(order: string) {
        if (order === 'asc') {
            this.products = this.products.sort(
                (productA, productB) => +productA.price - +productB.price
            );
        } else {
            this.products = this.products.sort(
                (productA, productB) => +productB.price - +productA.price
            );
        }
    }
}
