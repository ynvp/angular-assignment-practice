import { Component } from '@angular/core';
import * as data from './employees.json';

@Component({
    selector: 'app-assignment3',
    imports: [],
    templateUrl: './assignment3.component.html',
    styleUrl: './assignment3.component.css',
})
export class Assignment3Component {
    employees = (data as any).default;
    
}
