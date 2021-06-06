import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { TodoListState } from './todo.reducer';
import * as fromTodoListReducers from './todo.reducer';
import { hydrationMetaReducer } from './hydration/hydration.reducer';

export interface State {
  todoList: TodoListState,
}

export const reducers: ActionReducerMap<State> = {
  todoList: fromTodoListReducers.todoListReducer
};

export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer
]
