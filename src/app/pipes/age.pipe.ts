import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'age',
})
export class AgePipe implements PipeTransform {
    transform(dob: Date): string {
        let currentYear = new Date().getFullYear();
        let dateOfBirthYear = new Date(dob).getFullYear();
        return currentYear - dateOfBirthYear + ' years old';
    }
}
