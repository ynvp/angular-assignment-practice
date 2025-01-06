import { Component } from '@angular/core';
import { Assignment1Component } from './components/assignment1/assignment1.component';
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { Assignment3Component } from './components/assignment3/assignment3.component';
import { Assignment4Component } from './components/assignment4/assignment4.component';
import { Assignment5Component } from './components/assignment5/assignment5.component';
import { Assignment6Component } from './components/assignment6/assignment6.component';
import { Assignment7Component } from './components/assignment7/assignment7.component';
import { Assignment8Component } from './components/assignment8/assignment8.component';

@Component({
    selector: 'app-root',
    imports: [
        Assignment1Component,
        Assignment2Component,
        Assignment3Component,
        Assignment4Component,
        Assignment5Component,
        Assignment6Component,
        Assignment7Component,
        Assignment8Component,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'assignments-practice';
}
