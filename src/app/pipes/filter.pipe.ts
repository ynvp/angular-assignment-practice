import { Pipe, PipeTransform } from '@angular/core';
import { AEmployee } from '../components/assignment4/assignment4employee.model';

@Pipe({
    name: 'filter',
})
export class FilterPipe implements PipeTransform {
    transform(employees: AEmployee[], searchText: string): AEmployee[] {
        if (searchText === '') {
            return employees;
        }
        return employees.filter((employee) =>
            employee.name.toLowerCase().includes(searchText.toLowerCase())
        );
    }
}
