import { Injectable, inject } from '@angular/core';
import { OfficeEmployee } from '../components/assignment90/OfficeEmployee.model';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class OfficeEmployeesService {
    officeEmployees!: OfficeEmployee[];
    httpClient!: HttpClient;
    baseUrl: string = 'http://localhost:3000/employees/';

    constructor() {
        this.httpClient = inject(HttpClient);
    }

    getOfficeEmployees(): Observable<Object> {
        return this.httpClient.get(this.baseUrl, { observe: 'body' });
    }

    addNewEmployee(newEmployee: OfficeEmployee) {
        return this.httpClient.post(this.baseUrl, newEmployee, {
            observe: 'response',
        });
    }
    editEmployee(employeeInfo: OfficeEmployee) {
        let putUrl = this.baseUrl + employeeInfo.id;
        console.log(putUrl);

        return this.httpClient.put(putUrl, employeeInfo, {
            observe: 'response',
        });
    }
    deleteEmployee(employeeId: string) {
        let deleteUrl = this.baseUrl + employeeId;
        console.log(deleteUrl);

        return this.httpClient.delete(deleteUrl, { observe: 'response' });
    }
}
