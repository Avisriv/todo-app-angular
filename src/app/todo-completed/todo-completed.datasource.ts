import { MatTableDataSource } from '@angular/material/table';
import { TodoAllModel } from '../models/todo-all.model';
import { State } from '../../app/store';
import { Store } from '@ngrx/store';
import * as fromTodoListSelectors from '../store/selectors';
import {
  changeCompletedStatus,
  changeTitle,
  deleteTodoItem,
  setNewItem,
} from '../store/todo.actions';
import { v4 as uuidv4 } from 'uuid';

export class TodoCompletedDataSource extends MatTableDataSource<TodoAllModel> {
  orgData: TodoAllModel[] = [];
  searchString = '';

  constructor(private store: Store<State>) {
    super();
  }

  initData() {
    this.store
      .select(fromTodoListSelectors.getCompletedTodoItems)
      .subscribe((value) => {
        this.orgData = value;
        this.data = this.orgData;
      });
  }

  setTaskChecked(genre: any): void {
    this.store.dispatch(changeCompletedStatus({ id: genre.id }));
    if (this.searchString.length > 0) {
      this.applyFilter(this.searchString);
    }
  }

  deleteRow(element: any) {
    this.store.dispatch(deleteTodoItem({ id: element.id }));
  }

  addItem(title: string) {
    this.store.dispatch(
      setNewItem({
        item: { userId: 1, id: uuidv4(), title: title, completed: false },
      })
    );
    // this.todoListService.addItem({title});
  }

  removeItem(item: any) {
    this.store.dispatch(deleteTodoItem({ id: item.id }));
    // this.todoListService.deleteItem(item);
  }

  updateItem(id: any, title: any) {
    this.store.dispatch(changeTitle({ id: id, title: title }));
  }

  applyFilter(searchedString: string): void {
    this.searchString = searchedString;
    this.data = this.orgData;
    if (searchedString.length === 0) {
      this.data = this.data;
    } else {
      this.data = this.data.filter((element) => {
        if (element.title.includes(searchedString)) {
          return true;
        } else {
          return false;
        }
      });
    }
  }
}
