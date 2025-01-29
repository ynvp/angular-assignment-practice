import { CanDeactivateFn } from '@angular/router';

export const hasChangesGuard: CanDeactivateFn<unknown> = (
    component: any,
    currentRoute,
    currentState,
    nextState
) => {
    if (component?.hasChanges) {
        alert('You have unsaved changes. Please submit to continue.');
        console.log(currentRoute);
        console.log(currentState);
        console.log(nextState);
        return false;
    } else {
        return true;
    }
};
