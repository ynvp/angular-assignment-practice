import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import type { Observable } from 'rxjs';
import {
    addTodo,
    deleteTodo,
    toggleTodo,
} from '../../ngrx/actions/todo.actions';
import { Todo } from '../../models/todo';

@Component({
    selector: 'app-todo-crud',
    imports: [CommonModule, FormsModule],
    templateUrl: './todo-crud.component.html',
    styleUrl: './todo-crud.component.css',
})
export class TodoCrudComponent {
    todos$: Observable<any> | undefined;
    store = inject(Store);
    todoText: string = '';

    constructor() {
        this.todos$ = this.store.select((state: any) => state.todoArr);
    }

    addTodo() {
        let newTodo: Todo = {
            text: this.todoText,
            id: Math.floor(Math.random() * 1000),
            isCompleted: false,
        };
        this.store.dispatch(addTodo({ payload: newTodo }));
        this.todoText = '';
    }

    deleteTodo(id: number) {
        this.store.dispatch(deleteTodo({ id }));
    }

    toggleTodo(id: number) {
        this.store.dispatch(toggleTodo({ id }));
    }
}
