import { Injectable, inject } from '@angular/core';
import { LoadingComponent } from '../components/loading/loading.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private loadingSubject = new BehaviorSubject<boolean>(false);
    loading$ = this.loadingSubject.asObservable();

    show() {
        console.log('issuing loader');

        this.loadingSubject.next(true);
    }
    hide() {
        console.log('hiding loader');

        this.loadingSubject.next(false);
    }
}
