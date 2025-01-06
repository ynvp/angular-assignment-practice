import { Component } from '@angular/core';
import * as data from './employees.json';
import { ViewEmployeeDetailsComponent } from './view-employee-details/view-employee-details.component';
import { Employee } from './employee.model';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-assignment3',
    imports: [
        ViewEmployeeDetailsComponent,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    templateUrl: './assignment3.component.html',
    styleUrl: './assignment3.component.css',
})
export class Assignment3Component {
    employees = (data as any).default;
    selectedEmployee?: Employee;
    showEmployeeDetailsView: boolean = false;
    showEmployeeDeleteDialog: boolean = false;
    showAddEmployeeDialog: boolean = false;
    employeeForm = new FormGroup({
        userId: new FormControl(''),
        jobTitleName: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        preferredFullName: new FormControl(''),
        employeeCode: new FormControl(''),
        region: new FormControl(''),
        phoneNumber: new FormControl(''),
        emailAddress: new FormControl(''),
    });

    onSelectEmployee(employee: Employee) {
        this.selectedEmployee = employee;
    }

    onEmployeeDetailsView(employee: Employee) {
        this.onSelectEmployee(employee);

        this.showEmployeeDetailsView = !this.showEmployeeDetailsView;
    }

    onDeleteInit(employee: Employee) {
        this.onSelectEmployee(employee);

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger',
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    this.onDeleteEmployee();
                    swalWithBootstrapButtons.fire({
                        title: 'Deleted!',
                        text: 'Employee has been deleted.',
                        icon: 'success',
                    });
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: 'Cancelled',
                        text: '',
                        icon: 'error',
                    });
                }
            });
    }

    onDeleteEmployee() {
        console.log('Deleting Employee');

        this.employees = this.employees.filter(
            (employee: Employee) =>
                employee.userId != this.selectedEmployee!.userId
        );
        this.showEmployeeDeleteDialog = !this.showEmployeeDeleteDialog;
    }

    onAddEmployeeSubmit() {
        this.employees.push(this.employeeForm.value);
        console.log(this.employeeForm.value);
        this.showAddEmployeeDialog = false;
    }
}
