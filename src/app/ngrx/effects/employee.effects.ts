import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { OfficeEmployeesService } from '../../services/office-employees.service';
import {
    addEmployee,
    deleteEmployee,
    fetchEmployees,
} from '../actions/employee.actions';

@Injectable()
export class EmployeeEffects {
    loadEmployees$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchEmployees),
            exhaustMap(() =>
                this.officeEmployeesService.getOfficeEmployees().pipe(
                    map((OfficeEmployees) => ({
                        type: '[Employees API] Employees Loaded Successfully',
                        payload: OfficeEmployees,
                    })),
                    catchError(() =>
                        of({ type: '[Employees API] Employees Loaded Error' })
                    )
                )
            )
        )
    );
    deleteEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deleteEmployee),
            exhaustMap((action: any) =>
                this.officeEmployeesService.deleteEmployee(action.id).pipe(
                    map((Employee) => {
                        alert('Employee Deleted Successfully');
                        return { type: '[EmployeeList Page] Fetch Employees' };
                    }),
                    catchError(() =>
                        of({ type: '[Employees API] Employee Delete Error' })
                    )
                )
            )
        )
    );
    addEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addEmployee),
            exhaustMap((action: any) =>
                this.officeEmployeesService
                    .addNewEmployee(action.employee)
                    .pipe(
                        map((Employee) => {
                            alert('Employee Added Successfully');
                            return {
                                type: '[EmployeeList Page] Fetch Employees',
                            };
                        }),
                        catchError(() =>
                            of({ type: '[Employees API] Employee Add Error' })
                        )
                    )
            )
        )
    );
    constructor(
        private actions$: Actions,
        private officeEmployeesService: OfficeEmployeesService
    ) {}
}
