import { Component, inject } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

import { ageRangeValidator } from '../../validators/ageRangeValidator';
import { passwordMismatchValidator } from '../../validators/passwordMismatchValidator';

@Component({
    selector: 'app-form-builder',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './form-builder.component.html',
    styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
    formBuilder = inject(FormBuilder);

    registerForm = this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(5)]],
        lastName: [],
        age: [25, [Validators.required, ageRangeValidator(18, 60)]],
        email: [],
        password: ['', [Validators.required, passwordMismatchValidator]],
        confirmPassword: ['', [Validators.required, passwordMismatchValidator]],
        address: this.formBuilder.group({
            street: [],
            city: [],
            zip: [],
        }),
    });

    submitUserData(form: FormGroup) {
        console.log(form.value);
    }
}
