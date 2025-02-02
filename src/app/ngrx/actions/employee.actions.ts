import { createAction, props } from '@ngrx/store';
import { OfficeEmployee } from '../../components/assignment90/OfficeEmployee.model';

export const fetchEmployees = createAction(
    '[EmployeeList Page] Fetch Employees'
);
export const fetchEmployeesSuccess = createAction(
    '[Employees API] Employees Loaded Successfully',
    props<{ payload: OfficeEmployee[] }>()
);
export const fetchEmployeesError = createAction(
    '[Employees API] Employees Loaded Error'
);
export const deleteEmployee = createAction(
    '[Employees API] Delete Employee',
    props<{ id: string }>()
);
export const addEmployee = createAction(
    '[Employees API] Add Employee',
    props<{ employee: OfficeEmployee }>()
);
