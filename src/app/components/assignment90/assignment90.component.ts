import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { OfficeEmployeesService } from '../../services/office-employees.service';
import { OfficeEmployee } from './OfficeEmployee.model';
import { CommonModule } from '@angular/common';
import { NewEmployeeFormComponent } from './new-employee-form/new-employee-form.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-assignment90',
    imports: [CommonModule, NewEmployeeFormComponent, RouterLink],
    templateUrl: './assignment90.component.html',
    styleUrl: './assignment90.component.css',
})
export class Assignment90Component implements OnInit, OnDestroy {
    dummyOfficeEmployee: OfficeEmployee = new OfficeEmployee(
        '',
        '',
        '',
        '',
        '',
        '',
        0,
        0,
        ''
    );
    officeEmployeesService!: OfficeEmployeesService;
    officeEmployees!: OfficeEmployee[];
    addNewEmployeeResponseStatus: number = 201;
    isAddNewEmployeeFailed: boolean = false;
    generalTimer: any;
    selectedEmployee!: OfficeEmployee;
    selectedEmployeeForEdit: OfficeEmployee = this.dummyOfficeEmployee;
    selectedEmployeeId!: string;
    isFormInEditMode: boolean = false;

    constructor() {
        this.officeEmployeesService = inject(OfficeEmployeesService);
    }

    ngOnInit() {
        this.officeEmployeesService
            .getOfficeEmployees()
            .subscribe((response: OfficeEmployee[]) => {
                this.officeEmployees = response;
            });
    }

    employeeFullName(employee: OfficeEmployee) {
        return employee.getFullName();
    }
    addNewEmployee(newEmployee: OfficeEmployee) {
        if (this.isFormInEditMode === false) {
            this.officeEmployeesService
                .addNewEmployee(newEmployee)
                .subscribe((response: any) => {
                    if (this.addNewEmployeeResponseStatus === response.status) {
                        this.officeEmployees.push(newEmployee);
                    } else {
                        this.isAddNewEmployeeFailed = true;
                        this.generalTimer = setTimeout(() => {
                            this.isAddNewEmployeeFailed = false;
                        }, 5000);
                    }
                });
        } else {
            this.officeEmployeesService
                .editEmployee(newEmployee)
                .subscribe((response: any) => {
                    if (response.status === 200) {
                        this.officeEmployeesService
                            .getOfficeEmployees()
                            .subscribe((response: OfficeEmployee[]) => {
                                this.officeEmployees = response;
                            });
                        this.selectedEmployeeForEdit = this.dummyOfficeEmployee;
                        this.isFormInEditMode = false;
                    }
                });
        }
    }

    onEditEmployee(employee: OfficeEmployee) {
        this.selectedEmployeeForEdit = employee;
        this.isFormInEditMode = true;
    }

    initEmployeeDelete(employee: OfficeEmployee) {
        this.selectedEmployee = employee;
        this.selectedEmployeeId = employee.id;
    }

    deleteEmployee() {
        this.officeEmployeesService
            .deleteEmployee(this.selectedEmployeeId)
            .subscribe((response) => {
                if (response.status === 200) {
                    let employeeIndexToRemove = this.officeEmployees.findIndex(
                        (e) => e.id === this.selectedEmployeeId
                    );
                    this.officeEmployees.splice(employeeIndexToRemove, 1);
                }
            });
    }

    ngOnDestroy() {
        clearTimeout(this.generalTimer);
    }
}
