import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AEmployee } from '../assignment4/assignment4employee.model';

@Component({
    selector: 'app-assignment7',
    imports: [EmployeeListComponent, AddEmployeeComponent],
    templateUrl: './assignment7.component.html',
    styleUrl: './assignment7.component.css',
})
export class Assignment7Component {
    employeesData = [
        { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
        { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
        { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
        { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
        { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
        { eId: 106, name: 'sanjay', sal: 5500, gender: 'male' },
        { eId: 107, name: 'alok', sal: 7001, gender: 'male' },
        { eId: 108, name: 'alok', sal: 7000, gender: 'male' },
    ];

    addNewEmployee(newEmployeeDetails: AEmployee) {
        this.employeesData.push(newEmployeeDetails);
    }

    deleteEmployee(employee?: AEmployee) {
        this.employeesData = this.employeesData.filter(
            (e) => e.eId != employee?.eId
        );
    }
}
