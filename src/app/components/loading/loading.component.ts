import { Component, inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'app-loading',
    imports: [],
    templateUrl: './loading.component.html',
    styleUrl: './loading.component.css',
})
export class LoadingComponent {
    isLoading: boolean = false;
    loadingService = inject(LoadingService);

    ngOnInit() {
        this.loadingService.loading$.subscribe((val) => {
            this.isLoading = val;
        });
    }
}
