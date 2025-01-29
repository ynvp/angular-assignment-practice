import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-about-us',
    imports: [RouterLink],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
    router = inject(Router);
    location = inject(Location);

    doSomethingAndGoToHome() {
        this.router.navigate(['/home']);
    }

    prev() {
        this.location.back();
    }

    next() {
        this.location.forward();
    }
}
