import { Component, output, input, InputSignal } from '@angular/core';
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
    addNewEmployee = output<OfficeEmployee>();
    selectedEmployeeForEdit = input<OfficeEmployee>();
    isFormInEditMode = input<boolean>();

    newEmployeeForm: any = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        phoneNumber: new FormControl('', Validators.required),
        hireDate: new FormControl('', Validators.required),
        salary: new FormControl('', Validators.required),
        departmentId: new FormControl('', Validators.required),
        image: new FormControl('', Validators.required),
    });

    generateNewId(): string {
        return Math.floor(Math.random() * 100).toString();
    }

    ngOnChanges() {
        this.newEmployeeForm.controls['firstName'].setValue(
            this.selectedEmployeeForEdit()?.FIRST_NAME
        );
        this.newEmployeeForm.controls['lastName'].setValue(
            this.selectedEmployeeForEdit()?.LAST_NAME
        );
        this.newEmployeeForm.controls['email'].setValue(
            this.selectedEmployeeForEdit()?.EMAIL
        );
        this.newEmployeeForm.controls['phoneNumber'].setValue(
            this.selectedEmployeeForEdit()?.PHONE_NUMBER
        );
        this.newEmployeeForm.controls['hireDate'].setValue(
            this.selectedEmployeeForEdit()?.HIRE_DATE
        );
        this.newEmployeeForm.controls['salary'].setValue(
            this.selectedEmployeeForEdit()?.SALARY
        );
        this.newEmployeeForm.controls['departmentId'].setValue(
            this.selectedEmployeeForEdit()?.DEPARTMENT_ID
        );
        this.newEmployeeForm.controls['image'].setValue(
            this.selectedEmployeeForEdit()?.Image
        );
    }
    onSubmit() {
        this.newEmployee = new OfficeEmployee(
            this.isFormInEditMode()
                ? this.selectedEmployeeForEdit()!.id
                : this.generateNewId(),
            this.newEmployeeForm.value.firstName!,
            this.newEmployeeForm.value.lastName!,
            this.newEmployeeForm.value.email!,
            this.newEmployeeForm.value.phoneNumber!,
            this.newEmployeeForm.value.hireDate!,
            this.newEmployeeForm.value.salary!,
            this.newEmployeeForm.value.departmentId!,
            this.newEmployeeForm.value.image!
        );
        console.log(this.newEmployee);

        this.addNewEmployee.emit(this.newEmployee);
        this.newEmployeeForm.reset();
    }
}
