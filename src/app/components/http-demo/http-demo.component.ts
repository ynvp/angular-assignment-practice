import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-http-demo',
    imports: [],
    templateUrl: './http-demo.component.html',
    styleUrl: './http-demo.component.css',
})
export class HttpDemoComponent {
    constructor(private httpClient: HttpClient) {
        // this.fetchDataJavascript();
        this.fetchDataAngular();
    }
    fetchDataJavascript() {
        const users_url = 'https://jsonplaceholder.typicode.com/users';
        fetch(users_url).then(
            (response) => {
                console.log(response);
                response.json().then((finalResponse) => {
                    console.log(finalResponse);
                });
            },
            (err) => {
                console.log(err);
            }
        );
    }

    fetchDataAngular() {
        const users_url = 'https://jsonplaceholder.typicode.com/users';
        this.httpClient.get(users_url).subscribe(
            (response) => {
                console.log(response);
            },
            (err) => {
                console.log(err);
            },
            () => {
                console.log('call completed');
            }
        );
    }
}
