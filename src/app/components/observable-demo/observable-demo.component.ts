import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from '@angular/forms';
import { from, map, Observable, switchMap } from 'rxjs';

@Component({
    selector: 'app-observable-demo',
    imports: [FormsModule, ReactiveFormsModule, CommonModule],
    templateUrl: './observable-demo.component.html',
    styleUrl: './observable-demo.component.css',
})
export class ObservableDemoComponent {
    searchResult$: Observable<any> | undefined;
    searchForm: any;
    constructor(private http: HttpClient) {
        this.searchForm = new FormGroup({
            searchField: new FormControl(),
        });
    }
    ngOnInit() {
        let observable1 = new Observable(function (observer) {
            observer.next(100);
            observer.next('Hi');
            observer.next('Hello');
        });
        let subscriber1 = observable1.subscribe({
            next: (val) => {
                console.log('next called', val);
            },
            error: (err) => {
                console.log(err);
            },
            complete: () => {
                console.log('all data received');
            },
        });

        let arr = [1, 2, 4, 5, 100];
        let createObservable2 = from(arr);

        let testObservable2 = createObservable2.subscribe((ele) => {
            console.log(ele);
        });

        this.searchResult$ = this.searchForm
            .get('searchField')
            .valueChanges.pipe(
                switchMap((term) =>
                    this.http.get<any>(
                        `https://swapi.dev/api/people/?search=${term}`
                    )
                ),
                map((response: any) =>
                    response.count > 0 ? response.results : []
                )
            );
    }
    time = new Observable<string>((observer) => {
        setInterval(() => observer.next(new Date().toLocaleTimeString()), 1000);
    });
}
