import { Component, DoCheck } from '@angular/core';

@Component({
    selector: 'app-assignment9',
    imports: [],
    templateUrl: './assignment9.component.html',
    styleUrl: './assignment9.component.css',
})
export class Assignment9Component implements DoCheck {
    currentColor = 'red';
    timer: any;
    config: any;
    colors: any;

    constructor() {
        this.config = {
            red: { upcomingColor: 'green', duration: 4000 },
            green: { upcomingColor: 'yellow', duration: 4000 },
            yellow: { upcomingColor: 'red', duration: 4000 },
        };

        this.colors = Object.keys(this.config);
    }

    ngDoCheck() {
        const { duration, upcomingColor } = this.config[this.currentColor];

        this.timer = setTimeout(() => {
            this.currentColor = upcomingColor;
        }, duration);
    }
    ngOnDestroy() {
        clearTimeout(this.timer);
    }
}
