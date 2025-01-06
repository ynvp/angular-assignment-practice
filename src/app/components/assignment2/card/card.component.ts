import { Component, input } from '@angular/core';
import { User } from '../assignment2.model';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    userData = input.required<User>();
}
