import { Component, inject } from '@angular/core';
import type { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
    decrementAction,
    incrementAction,
    resetAction,
} from '../../ngrx/actions/counter.actions';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-counter',
    imports: [CommonModule],
    templateUrl: './counter.component.html',
    styleUrl: './counter.component.css',
})
export class CounterComponent {
    count$: Observable<number> | undefined;
    private store = inject(Store);

    constructor() {
        this.count$ = this.store.select('count');
    }

    increment() {
        this.store.dispatch(incrementAction());
    }
    decrement() {
        this.store.dispatch(decrementAction());
    }
    reset() {
        this.store.dispatch(resetAction());
    }
}
