import { Component, input, output } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
    selector: 'app-view-employee-details',
    imports: [],
    templateUrl: './view-employee-details.component.html',
    styleUrl: './view-employee-details.component.css',
})
export class ViewEmployeeDetailsComponent {
    employeeData = input<Employee>();
    closeDialog = output();
    onClose() {
        this.closeDialog.emit();
    }
}
