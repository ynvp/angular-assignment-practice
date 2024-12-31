import { Component } from '@angular/core';
import * as usersData from './users.json';
import { CardComponent } from './card/card.component';

@Component({
    selector: 'app-assignment2',
    imports: [CardComponent],
    templateUrl: './assignment2.component.html',
    styleUrl: './assignment2.component.css',
})
export class Assignment2Component {
    users: any = (usersData as any).default;

    isCardView: boolean = false;
}
