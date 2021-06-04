import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TodoListState } from '../store/counter.reducer';
import * as fromTodoListReducers from '../store/counter.reducer';

export interface State {
  todoList: TodoListState,
}

export const reducers: ActionReducerMap<State> = {
  todoList: fromTodoListReducers.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
