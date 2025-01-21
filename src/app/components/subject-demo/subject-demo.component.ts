import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
    selector: 'app-subject-demo',
    imports: [],
    templateUrl: './subject-demo.component.html',
    styleUrl: './subject-demo.component.css',
})
export class SubjectDemoComponent {
    ngOnInit() {
        this.subjectDemo();
        this.behaviorSubjectDemo();
        this.replaySubjectDemo();
        this.asyncSubjectDemo();
    }
    subjectDemo() {
        let mySubject = new Subject();
        mySubject.next('AAAAA');
        mySubject.subscribe((value) => console.log('subscriber 1 1 ' + value));
        mySubject.next('BBBB');
        mySubject.subscribe((value) => console.log('subscriber 2 1' + value));
        mySubject.next('CCCC');
        console.log('------------------------------------');
    }
    behaviorSubjectDemo() {
        let mySubject1 = new BehaviorSubject('default value...');
        mySubject1.next('AAAAA');
        mySubject1.subscribe((value) => console.log('subscriber 1 2' + value));
        mySubject1.next('BBBB');
        mySubject1.subscribe((value) => console.log('subscriber 2 2' + value));
        mySubject1.next('CCCC');
        console.log('------------------------------------');
    }
    replaySubjectDemo() {
        let mySubject2 = new ReplaySubject(); // Publisher
        mySubject2.next('AAAAA');
        mySubject2.subscribe((val) => console.log('Subscriber-1 3', val));
        mySubject2.next('BBBBB');
        mySubject2.subscribe((val) => console.log('Subscriber-2 3', val));
        mySubject2.next('CCCCC');
        console.log('------------------------------------');
    }
    asyncSubjectDemo() {
        let mySubject3 = new AsyncSubject(); // Publisher
        mySubject3.next('AAAAA');
        mySubject3.subscribe((val) => console.log('Subscriber-1 4', val));
        mySubject3.next('BBBBB');
        mySubject3.subscribe((val) => console.log('Subscriber-2 4', val));
        mySubject3.next('CCCCC');
        mySubject3.complete();
    }
}
