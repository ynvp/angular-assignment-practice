import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogRef,
    MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-material-demo',
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
    ],
    templateUrl: './material-demo.component.html',
    styleUrl: './material-demo.component.css',
})
export class MaterialDemoComponent {
    readonly matDialog = inject(MatDialog);

    openDialog() {
        this.matDialog.open(ContactUsComponent);
    }
}
