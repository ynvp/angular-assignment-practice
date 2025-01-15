import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('Logger interceptor called...');

    return next(req);
};
