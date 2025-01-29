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
    activateRoute = inject(ActivatedRoute);

    ngOnInit() {
        this.activateRoute.queryParams.subscribe((queryParams) => {
            this.product = queryParams;
        });
    }
}
