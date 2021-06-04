import { createAction, props } from '@ngrx/store';
import { TodoAllModel } from 'src/app/todo-all/todo-all.model';

export const setNewItem = createAction('[Todo list] Set new todo list item', props<{item: TodoAllModel}>());

export const deleteTodoItem = createAction('[Todo list] Delete todo item', props<{id: string}>());

export const changeCompletedStatus = createAction('[Todo list] Change status of the item', props<{id: string, completed: boolean}>());
