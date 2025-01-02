import { Component } from '@angular/core';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from "./assignment3/assignment3.component";
import { Assignment4Component } from "./assignment4/assignment4.component";
import { Assignment5Component } from "./assignment5/assignment5.component";
import { Assignment6Component } from "./assignment6/assignment6.component";
import { Assignment7Component } from "./assignment7/assignment7.component";
import { Assignment8Component } from "./assignment8/assignment8.component";

@Component({
    selector: 'app-root',
    imports: [Assignment1Component, Assignment2Component, Assignment3Component, Assignment4Component, Assignment5Component, Assignment6Component, Assignment7Component, Assignment8Component],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'assignments-practice';
}
