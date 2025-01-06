import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { AEmployee } from '../assignment4/assignment4employee.model';

@Component({
    selector: 'app-assignment5',
    imports: [],
    templateUrl: './assignment5.component.html',
    styleUrl: './assignment5.component.css',
})
export class Assignment5Component {
    employeeService = inject(EmployeeService);
    employees5?: AEmployee[];
    getAllEmployees() {
        this.employees5 = this.employeeService.allEmployees();
    }

    getMaleEmployees() {
        this.employees5 = this.employeeService.maleEmployees();
    }

    getFemaleEmployees() {
        this.employees5 = this.employeeService.femaleEmployees();
    }
}
