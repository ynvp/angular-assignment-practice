import { Component } from '@angular/core';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { FormsModule } from '@angular/forms';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
    selector: 'app-assignment4',
    imports: [OrdinalPipe, FormsModule, AgePipe, SalutationPipe, FilterPipe],
    templateUrl: './assignment4.component.html',
    styleUrl: './assignment4.component.css',
})
export class Assignment4Component {
    inputNumber: number = 0;
    inputDob: Date = new Date();
    employees = [
        { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
        { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
        { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
        { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
        { eId: 105, name: 'deepak', sal: 8000, gender: 'male' },
        { eId: 106, name: 'sanjay', sal: 5500, gender: 'male' },
        { eId: 107, name: 'alok', sal: 7001, gender: 'male' },
        { eId: 108, name: 'alok', sal: 7000, gender: 'male' },
    ];
    searchText: string = '';
}
