import { Component, input, output } from '@angular/core';
import { AEmployee } from '../../assignment4/assignment4employee.model';

@Component({
    selector: 'app-employee-list',
    imports: [],
    templateUrl: './employee-list.component.html',
    styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
    selectedEmployee1?: AEmployee;
    employeesList = input.required<AEmployee[]>();
    showEmployeeDeleteDialog1: boolean = false;
    deleteEmployee = output<AEmployee | undefined>();
    onDeleteInit(employee: AEmployee) {
        this.selectedEmployee1 = employee;
        this.showEmployeeDeleteDialog1 = !this.showEmployeeDeleteDialog1;
    }

    onDeleteEmployee() {
        this.deleteEmployee.emit(this.selectedEmployee1);
        this.showEmployeeDeleteDialog1 = !this.showEmployeeDeleteDialog1;
    }
}
