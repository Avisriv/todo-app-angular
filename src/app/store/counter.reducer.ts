import { TodoAllModel } from 'src/app/todo-all/todo-all.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as TodoListActions from './counter.actions';

export interface TodoListState {
  items: TodoAllModel[];
}

export const initialState: TodoListState = {
  items: []
};

const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.setNewItem, (state, {item}) => ({...state, items: state.items.concat(item)})),
  on(TodoListActions.deleteTodoItem, (state, {id}) => ({...state, items: removeItemFromList(state.items, id)})),
  on(TodoListActions.changeCompletedStatus, (state, {id, completed}) => ({
    ...state,
    items: markListElementAsCompleted(state.items, id, completed)
  }))
);


function removeItemFromList(list: TodoAllModel[], id: string): TodoAllModel[] {
  return list.filter((element) => {
    return element.id !== id
  })
}

function markListElementAsCompleted(list: TodoAllModel[], id: string, completed: boolean): TodoAllModel[] {
  return list.map(value => {
    if (value.id === id) {
      return {
        ...value,
        completed: completed
      }
    } else {
      return value
    }
  })
}

export function reducer(state: TodoListState | undefined, action: Action) {
  return todoListReducer(state, action);
}
