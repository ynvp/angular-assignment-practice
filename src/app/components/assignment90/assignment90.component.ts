import { Component, inject, OnInit } from '@angular/core';
import { OfficeEmployeesService } from '../../services/office-employees.service';
import { OfficeEmployee } from './OfficeEmployee.model';
import { CommonModule } from '@angular/common';
import { NewEmployeeFormComponent } from './new-employee-form/new-employee-form.component';

@Component({
    selector: 'app-assignment90',
    imports: [CommonModule, NewEmployeeFormComponent],
    templateUrl: './assignment90.component.html',
    styleUrl: './assignment90.component.css',
})
export class Assignment90Component implements OnInit {
    officeEmployeesService!: OfficeEmployeesService;
    officeEmployees!: OfficeEmployee[];
    constructor() {
        this.officeEmployeesService = inject(OfficeEmployeesService);
        console.log(this.officeEmployeesService);
    }

    ngOnInit() {
        this.officeEmployeesService
            .getOfficeEmployees()
            .subscribe((response) => {
                this.officeEmployees = response;
            });
    }
    addNewEmployee(newEmployee: OfficeEmployee) {
        this.officeEmployeesService
            .addNewEmployee(newEmployee)
            .subscribe((response) => {
                console.log(response.status); // Access the status code here
            });
        this.officeEmployees.push(newEmployee);
    }
}
