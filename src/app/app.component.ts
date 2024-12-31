import { Component } from '@angular/core';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from "./assignment3/assignment3.component";

@Component({
    selector: 'app-root',
    imports: [Assignment1Component, Assignment2Component, Assignment3Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'assignments-practice';
}
