import { createReducer, on } from '@ngrx/store';
import { fetchEmployeesSuccess } from '../actions/employee.actions';

export const initialState = [];
export const employeesReducer = createReducer(
    initialState,
    on(fetchEmployeesSuccess, (state, action: any) => {
        return action.payload;
    })
);
