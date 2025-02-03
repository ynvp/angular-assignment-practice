import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { MaterialDemoComponent } from '../material-demo/material-demo.component';

@Component({
    selector: 'app-home',
    imports: [CounterComponent, MaterialDemoComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {}
