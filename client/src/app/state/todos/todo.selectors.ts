import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { TodoState, todosKey } from './todo.reducer';

export const selectTodos = createFeatureSelector<TodoState>(todosKey);
// export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => state.todos
);