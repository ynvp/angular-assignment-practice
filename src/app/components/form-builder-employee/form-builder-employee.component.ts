import { Component, inject } from '@angular/core';
import { FormBuilder, type FormArray, type FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form-builder-employee',
    imports: [],
    templateUrl: './form-builder-employee.component.html',
    styleUrl: './form-builder-employee.component.css',
})
export class FormBuilderEmployeeComponent {
    employeeForm!: FormGroup;

    formBuilder = inject(FormBuilder);

    ngOnInit() {
        this.employeeForm = this.formBuilder.group({
            employees: this.formBuilder.array([]),
        });
    }

    employees(): FormArray {
        return this.employeeForm.get('employees') as FormArray;
    }

    newEmployee(): FormGroup {
        return this.formBuilder.group({
            firstName: '',
            lastName: '',
            skills: this.formBuilder.array([]),
        });
    }

    addEmployee() {
        this.employees().push(this.newEmployee());
    }

    removeEmployee(employeeIndex: number) {
        this.employees().removeAt(employeeIndex);
    }

    employeeSkills(employeeIndex: number) {
        return this.employees().at(employeeIndex).get('skills') as FormArray;
    }

    newSkill(): FormGroup {
        return this.formBuilder.group({
            skill: '',
            exp: '',
        });
    }

    addEmployeeSkill(employeeIndex: number) {
        this.employeeSkills(employeeIndex).push(this.newSkill());
    }

    removeEmployeeSkill(employeeIndex: number, skillIndex: number) {
        this.employeeSkills(employeeIndex).removeAt(skillIndex);
    }

    onSubmit() {
        console.log(this.employeeForm.value);
    }
}
