import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    userRole: any;
    constructor() {
        this.userRole = 'admin';
    }
}
