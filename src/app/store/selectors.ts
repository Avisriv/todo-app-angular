import { createSelector } from '@ngrx/store';
import { TodoListState } from './todo.reducer';
import { State } from 'src/app/store/index';

export const getRootState = (state: State) => state.todoList;

export const getAllTodoItems = createSelector(
  getRootState,
  (state: TodoListState) => state.items
);

export const getActiveTodoItems = createSelector(
  getRootState,
  (state: TodoListState) =>  state.items.filter((element) => {
    return element.completed !== true
  })
);

export const getCompletedTodoItems = createSelector(
  getRootState,
  (state: TodoListState) =>  state.items.filter((element) => {
    return element.completed !== false
  })
);