import { Component } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { FormsDemoComponent } from '../forms-demo/forms-demo.component';

@Component({
    selector: 'app-model-forms-demo',
    imports: [ReactiveFormsModule, FormsModule],
    templateUrl: './model-forms-demo.component.html',
    styleUrl: './model-forms-demo.component.css',
})
export class ModelFormsDemoComponent {
    registerForm = new FormGroup(
        {
            firstName: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
            ]),
            lastName: new FormControl(''),
            email: new FormControl(''),
            address: new FormGroup({
                street: new FormControl(),
                city: new FormControl(),
                zip: new FormControl(),
            }),
        },
        { updateOn: 'blur' }
    );

    constructor() {}
    submitUserData(submittedForm: FormGroup) {
        console.log(submittedForm.value);
    }
}
