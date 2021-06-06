import { TodoAllModel } from 'src/app/models/todo-all.model';
import { createReducer, on } from '@ngrx/store';
import * as TodoListActions from './todo.actions';

export interface TodoListState {
  items: TodoAllModel[];
}

export const initialState: TodoListState = {
  items: []
};

export const todoListReducer = createReducer(
  initialState,
  on(TodoListActions.setNewItem, (state, {item}) => ({...state, items: state.items.concat(item)})),
  on(TodoListActions.deleteTodoItem, (state, {id}) => ({...state, items: removeItemFromList(state.items, id)})),
  on(TodoListActions.changeCompletedStatus, (state, {id}) => ({
    ...state,
    items: markListElementAsCompleted(state.items, id)
  })),
  on(TodoListActions.changeTitle, (state, {id, title}) => ({...state, items: changeTitle(state.items, id, title)})),
);


function removeItemFromList(list: TodoAllModel[], id: string): TodoAllModel[] {
  return list.filter((element) => {
    return element.id !== id
  })
}

function markListElementAsCompleted(list: TodoAllModel[], id: string): TodoAllModel[] {
  return list.map(value => {
    if (value.id === id) {
      return {
        ...value,
        completed: !value.completed
      };
    } else {
      return value
    }
  })
}
function changeTitle(list: TodoAllModel[], id: string, newTitle: string): TodoAllModel[] {
  return list.map(value => {
    if (value.id === id) {
      return {
        ...value,
        title: newTitle
      };
    } else {
      return value
    }
  })
}

