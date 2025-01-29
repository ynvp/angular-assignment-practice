import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact-us',
    imports: [FormsModule, CommonModule],
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
    name!: string;
    email!: string;
    hasChanges: boolean = true;

    onSubmit() {
        this.hasChanges = false;
    }
}
