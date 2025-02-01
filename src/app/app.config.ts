import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './interceptors/logger.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/reducers/counter.reducers';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(
            withInterceptors([loggerInterceptor, loadingInterceptor])
        ),
        provideStore({ count: counterReducer }),
    ],
};
