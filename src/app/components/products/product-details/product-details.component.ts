import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-details',
    imports: [],
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
    product: any;
    activatedRoute = inject(ActivatedRoute);

    ngOnInit() {
        // this.activateRoute.queryParams.subscribe((queryParams) => {
        //     this.httpClient
        //         .get(`https://fakestoreapi.com/products/${queryParams?.['id']}`)
        //         .subscribe((response) => {
        //             this.product = response;
        //         });
        // });

        this.activatedRoute.data.subscribe((response: any) => {
            this.product = response.product;
        });
    }
}
