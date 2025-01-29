import { CanActivateFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
    let userService = inject(UserService);
    if (userService.userRole === 'admin') {
        return true;
    } else {
        alert('Only Admins able to access products at the moment!');
        return false;
    }
};
