import { Component, output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { OfficeEmployee } from '../OfficeEmployee.model';

@Component({
    selector: 'app-new-employee-form',
    imports: [ReactiveFormsModule],
    templateUrl: './new-employee-form.component.html',
    styleUrl: './new-employee-form.component.css',
})
export class NewEmployeeFormComponent {
    newEmployee!: OfficeEmployee;
    autoId: number = 10;
    addNewEmployee = output<OfficeEmployee>();

    newEmployeeForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', Validators.required),
        hireDate: new FormControl('', Validators.required),
        salary: new FormControl(0, Validators.required),
        departmentId: new FormControl(0, Validators.required),
        image: new FormControl('', Validators.required),
    });
    onSubmit() {
        this.newEmployee = {
            id: this.autoId++,
            FIRST_NAME: this.newEmployeeForm.value.firstName!,
            LAST_NAME: this.newEmployeeForm.value.lastName!,
            EMAIL: this.newEmployeeForm.value.email!,
            PHONE_NUMBER: this.newEmployeeForm.value.phoneNumber!,
            HIRE_DATE: this.newEmployeeForm.value.hireDate!,
            SALARY: this.newEmployeeForm.value.salary!,
            DEPARTMENT_ID: this.newEmployeeForm.value.departmentId!,
            Image: this.newEmployeeForm.value.image!,
        };

        this.addNewEmployee.emit(this.newEmployee);
        this.newEmployeeForm.reset();
    }
}
