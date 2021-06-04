import { createSelector } from '@ngrx/store';
import { TodoListState } from './counter.reducer';
import { State } from 'src/app/store/index';

export const getRootState = (state: State) => state.todoList;

export const getTodoItems = createSelector(
  getRootState,
  (state: TodoListState) => state.items
);
