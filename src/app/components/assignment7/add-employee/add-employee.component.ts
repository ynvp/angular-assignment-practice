import { Component, output } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { AEmployee } from '../../assignment4/assignment4employee.model';

@Component({
    selector: 'app-add-employee',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './add-employee.component.html',
    styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
    employeeInputForm: FormGroup<any> = new FormGroup({
        eId: new FormControl<number>(0, Validators.required),
        name: new FormControl<string>('', Validators.required),
        sal: new FormControl<number>(0, Validators.required),
        gender: new FormControl<string>('', Validators.required),
    });

    addNewEmployee = output<AEmployee>();
    onSubmit() {
        let newEmployee: AEmployee = this.employeeInputForm?.getRawValue();
        console.log(newEmployee);

        this.addNewEmployee.emit(newEmployee);
    }
}
