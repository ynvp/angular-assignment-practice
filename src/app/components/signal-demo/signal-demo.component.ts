import {
    Component,
    computed,
    effect,
    signal,
    Signal,
    type WritableSignal,
} from '@angular/core';

@Component({
    selector: 'app-signal-demo',
    imports: [],
    templateUrl: './signal-demo.component.html',
    styleUrl: './signal-demo.component.css',
})
export class SignalDemoComponent {
    num: Signal<number> = signal(0);

    count: WritableSignal<number> = signal(0);

    onIncrement() {
        this.count.update((value) => value + 1);
    }
    doubleCount: Signal<number> = computed(() => this.count() * 2);

    countEffect = effect(() => {
        console.log(`The current count is: ${this.count()}`);
    });
}
