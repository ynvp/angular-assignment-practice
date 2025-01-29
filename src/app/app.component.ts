import { Component } from '@angular/core';
import { Assignment1Component } from './components/assignment1/assignment1.component';
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { Assignment3Component } from './components/assignment3/assignment3.component';
import { Assignment4Component } from './components/assignment4/assignment4.component';
import { Assignment5Component } from './components/assignment5/assignment5.component';
import { Assignment6Component } from './components/assignment6/assignment6.component';
import { Assignment7Component } from './components/assignment7/assignment7.component';
import { Assignment8Component } from './components/assignment8/assignment8.component';
import { Assignment9Component } from './components/assignment9/assignment9.component';
import { Assignment90Component } from './components/assignment90/assignment90.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpDemoComponent } from './components/http-demo/http-demo.component';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { SubjectDemoComponent } from './components/subject-demo/subject-demo.component';
import { SignalDemoComponent } from './components/signal-demo/signal-demo.component';
import { FormsDemoComponent } from './components/forms-demo/forms-demo.component';
import { ModelFormsDemoComponent } from './components/model-forms-demo/model-forms-demo.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { FormBuilderEmployeeComponent } from './components/form-builder-employee/form-builder-employee.component';
import { RoutingDemoComponent } from './components/routing-demo/routing-demo.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
    // Assignment1Component,
    // Assignment2Component,
    // Assignment3Component,
    // Assignment4Component,
    // Assignment5Component,
    // Assignment6Component,
    // Assignment7Component,
    // Assignment8Component,
    // Assignment9Component,
    // Assignment90Component,
    // LoadingComponent,
    // HttpDemoComponent,
    // ObservableDemoComponent,
    // SubjectDemoComponent,
    // SignalDemoComponent,
    // FormsDemoComponent,
    // ModelFormsDemoComponent,
    // FormBuilderComponent,
    // FormBuilderEmployeeComponent,
    RouterOutlet,
    RoutingDemoComponent,
    LoadingComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'assignments-practice';
}
