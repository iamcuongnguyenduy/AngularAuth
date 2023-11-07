import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo, loadTodos } from '../../state/todos/todo.actions';
import { selectAllTodos } from '../../state/todos/todo.selectors';
import { Todo } from '../../state/todos/todo.model';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class TodoComponent implements OnInit {

  constructor(private store: Store) {}

  public allTodos$ = this.store.select(selectAllTodos);
  public todo = ''

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  addTodo() {
    this.store.dispatch(addTodo({ content: this.todo }));
    this.todo = '';
  }

  removeTodo(todo: Todo) {
    this.store.dispatch(removeTodo({ id: todo.id }));
  }
}
