import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './interceptors/logger.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/reducers/counter.reducers';
import { employeesReducer } from './ngrx/reducers/employee.reducers';
import { provideEffects } from '@ngrx/effects';
import { EmployeeEffects } from './ngrx/effects/employee.effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(
            withInterceptors([loggerInterceptor, loadingInterceptor])
        ),
        provideStore({
            count: counterReducer,
            officeEmployees: employeesReducer,
        }),
        provideEffects(EmployeeEffects),
    ],
};
