import { Component, inject, OnDestroy, OnInit } from '@angular/core';
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
export class Assignment90Component implements OnInit, OnDestroy {
    dummyOfficeEmployee: OfficeEmployee = {
        id: '',
        FIRST_NAME: '',
        LAST_NAME: '',
        EMAIL: '',
        PHONE_NUMBER: '',
        HIRE_DATE: '',
        SALARY: 0,
        DEPARTMENT_ID: 0,
        Image: '',
    };

    officeEmployeesService!: OfficeEmployeesService;
    officeEmployees!: OfficeEmployee[];
    addNewEmployeeResponseStatus: number = 201;
    isAddNewEmployeeFailed: boolean = false;
    generalTimer: any;
    selectedEmployee!: OfficeEmployee;
    selectedEmployeeForEdit: OfficeEmployee = this.dummyOfficeEmployee;
    selectedEmployeeId!: string;
    isAPICallGoingOn: boolean = false;
    isFormInEditMode: boolean = false;

    constructor() {
        this.officeEmployeesService = inject(OfficeEmployeesService);
    }

    ngOnInit() {
        this.isAPICallGoingOn = true;
        this.officeEmployeesService
            .getOfficeEmployees()
            .subscribe((response: OfficeEmployee[]) => {
                this.isAPICallGoingOn = false;
                this.officeEmployees = response;
            });
        console.log(this.isAPICallGoingOn);
    }

    addNewEmployee(newEmployee: OfficeEmployee) {
        this.isAPICallGoingOn = true;
        if (this.isFormInEditMode === false) {
            this.officeEmployeesService
                .addNewEmployee(newEmployee)
                .subscribe((response: any) => {
                    if (this.addNewEmployeeResponseStatus === response.status) {
                        this.officeEmployees.push(newEmployee);
                        this.isAPICallGoingOn = false;
                    } else {
                        console.log('coming to else');
                        this.isAddNewEmployeeFailed = true;
                        this.generalTimer = setTimeout(() => {
                            this.isAddNewEmployeeFailed = false;
                        }, 5000);
                    }
                });
        } else {
            this.isAPICallGoingOn = true;
            this.officeEmployeesService
                .editEmployee(newEmployee)
                .subscribe((response: any) => {
                    if (response.status === 200) {
                        this.officeEmployeesService
                            .getOfficeEmployees()
                            .subscribe((response: OfficeEmployee[]) => {
                                this.isAPICallGoingOn = false;
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
        this.isAPICallGoingOn = true;
        this.officeEmployeesService
            .deleteEmployee(this.selectedEmployeeId)
            .subscribe((response) => {
                if (response.status === 200) {
                    let employeeIndexToRemove = this.officeEmployees.findIndex(
                        (e) => e.id === this.selectedEmployeeId
                    );
                    this.officeEmployees.splice(employeeIndexToRemove, 1);
                    this.isAPICallGoingOn = false;
                }
            });
    }

    ngOnDestroy() {
        clearTimeout(this.generalTimer);
    }
}
