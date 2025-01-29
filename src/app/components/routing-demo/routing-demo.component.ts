import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-routing-demo',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './routing-demo.component.html',
    styleUrl: './routing-demo.component.css',
})
export class RoutingDemoComponent {}
