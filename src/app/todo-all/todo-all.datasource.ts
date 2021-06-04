import { MatTableDataSource } from '@angular/material/table';
import { TodoAllModel } from './todo-all.model';
import { changeCompletedStatus, deleteTodoItem, setNewItem } from '../store/counter.actions';
import { Store } from '@ngrx/store';
import { State } from '../../app/store';

export class TodoAllDataSource extends MatTableDataSource<TodoAllModel> {

  orgData: TodoAllModel[] = [];

  constructor(private store: Store<State>) {
    super();
  }

  setData(response: any) {
    this.data = response;
  }

  setTaskChecked(genre: any, $event: any): void {
    console.log(genre);
    console.log($event);
  }

  addItem(title: string) {
    this.store.dispatch(setNewItem({item: {userId: 1, id: "abcj", title: title, completed: false}}));
    // this.todoListService.addItem({title});
  }

  removeItem(item: any) {
    this.store.dispatch(deleteTodoItem({id: item.id}));
    // this.todoListService.deleteItem(item);
  }

  updateItem(item: any, changes: any) {
    this.store.dispatch(changeCompletedStatus({id: item.id, completed: changes}));
    // this.todoListService.updateItem(item, changes);
  }
}
