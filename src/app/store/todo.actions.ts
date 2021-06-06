import { createAction, props } from '@ngrx/store';
import { TodoAllModel } from 'src/app/models/todo-all.model';

export const setNewItem = createAction('[Todo list] Set new todo list item', props<{item: TodoAllModel}>());

export const deleteTodoItem = createAction('[Todo list] Delete todo item', props<{id: string}>());

export const changeCompletedStatus = createAction('[Todo list] Change status of the item', props<{id: string}>());

export const changeTitle = createAction('[Todo list] CHange todo item', props<{id: string, title: string}>());


