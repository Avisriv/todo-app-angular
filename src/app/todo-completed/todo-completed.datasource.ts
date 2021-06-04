import { MatTableDataSource } from '@angular/material/table';
import { TodoAllModel } from '../todo-all/todo-all.model';


export class TodoCompletedDataSource extends MatTableDataSource<TodoAllModel> {

  orgData: TodoAllModel[] = [];

  constructor() {
    super();
  }

  setData(response: any) {
    this.data = response;
  }

  setTaskChecked(genre: any, $event: any): void {
    console.log(genre);
    console.log($event);
  }
}
