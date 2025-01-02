import { Injectable } from '@angular/core';
import { AEmployee } from '../assignment4/assignment4employee.model';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    employees5 = [
        { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
        { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
        { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
        { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
        { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
        { eId: 106, name: 'sanjay', sal: 5500, gender: 'male' },
        { eId: 107, name: 'alok', sal: 7001, gender: 'male' },
        { eId: 108, name: 'alok', sal: 7000, gender: 'male' },
    ];

    allEmployees(): AEmployee[] {
        return this.employees5;
    }

    maleEmployees(): AEmployee[] {
        return this.employees5.filter((employee) => employee.gender === 'male');
    }
    femaleEmployees(): AEmployee[] {
        return this.employees5.filter(
            (employee) => employee.gender === 'female'
        );
    }
}
