import { MatTableDataSource } from '@angular/material/table';
import { TodoAllModel } from '../todo-all/todo-all.model';
import { TodoAllService } from '../todo-all/todo-all.service';


export class TodoActiveDataSource extends MatTableDataSource<TodoAllModel> {

  orgData: TodoAllModel[] = [];

  constructor(private todoService: TodoAllService) {
    super();
    this.data = this.todoService.getData();
  }

  setTaskChecked(genre: any, $event: any): void {
    console.log(genre);
    console.log($event);
  }
}
