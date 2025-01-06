import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-assignment6',
    imports: [CommonModule],
    templateUrl: './assignment6.component.html',
    styleUrl: './assignment6.component.css',
})
export class Assignment6Component {
    darkMode: boolean = false;
    changeDisplayMode() {
        this.darkMode = !this.darkMode;
        if (this.darkMode) {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }
}
