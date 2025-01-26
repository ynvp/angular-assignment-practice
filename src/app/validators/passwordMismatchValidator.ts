import type {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
} from '@angular/forms';

export function passwordMismatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        console.log('in password validation');

        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;

        if (password && confirmPassword && confirmPassword !== password) {
            return { passwordMismatch: true };
        }
        return null;
    };
}
