import { Component, inject } from '@angular/core';
import type { OfficeEmployee } from '../OfficeEmployee.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-employee-details',
    imports: [CommonModule],
    templateUrl: './employee-details.component.html',
    styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
    employee: any;
    activatedRoute = inject(ActivatedRoute);
    httpClient = inject(HttpClient);

    ngOnInit() {
        this.activatedRoute.params.subscribe((paramObj) => {
            this.httpClient
                .get(`http://localhost:3000/employees/${paramObj['id']}`)
                .subscribe((response) => {
                    this.employee = response;
                });
        });
    }
}
