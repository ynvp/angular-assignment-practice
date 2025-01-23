import { Component, inject } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-form-builder',
    imports: [FormsModule, ReactiveFormsModule],
    templateUrl: './form-builder.component.html',
    styleUrl: './form-builder.component.css',
})
export class FormBuilderComponent {
    formBuilder = inject(FormBuilder);

    registerForm = this.formBuilder.group(
        {
            firstName: ['', [Validators.required, Validators.minLength(5)]],
            lastName: [],
            email: [],
            address: this.formBuilder.group({
                street: [],
                city: [],
                zip: [],
            }),
        },
        { updateOn: 'blur' }
    );

    submitUserData(form: FormGroup) {
        console.log(form.value);
    }
}
