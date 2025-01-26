import type {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';

export function ageRangeValidator(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        console.log('checking age validation');

        const fieldValue = control.value;
        if (fieldValue < minAge || fieldValue > maxAge) {
            return { invalidAge: true };
        }
        return null;
    };
}
