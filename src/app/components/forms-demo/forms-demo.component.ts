import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, type NgForm } from '@angular/forms';

@Component({
    selector: 'app-forms-demo',
    imports: [FormsModule, CommonModule],
    templateUrl: './forms-demo.component.html',
    styleUrl: './forms-demo.component.css',
})
export class FormsDemoComponent {
    employee = {
        firstName: '',
        lastName: '',
        age: 0,
        gender: 'male',
        about: '',
        skills: [],
    };
    register(myForm: NgForm) {
        console.log(myForm.value);
        this.employee.firstName = myForm.value.firstName;
        this.employee.lastName = myForm.value.lastName;
        this.employee.age = myForm.value.age;
        this.employee.gender = myForm.value.gender;
        this.employee.about = myForm.value.about;
        this.employee.skills = myForm.value.skills;
        console.log(this.employee);
    }
    resetForm(myForm: NgForm) {
        console.log(myForm);
        myForm.resetForm();
    }
}
