import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'salutation',
})
export class SalutationPipe implements PipeTransform {
    transform(name: string, gender: string): unknown {
        return gender === 'male' ? 'Mr. ' + name : 'Miss. ' + name;
    }
}
