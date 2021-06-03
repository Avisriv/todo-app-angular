import { MatTableDataSource } from '@angular/material/table';
import { TodoAllModel } from './todo-all.model';
import { TodoAllService } from './todo-all.service';

export class TodoAllDataSource extends MatTableDataSource<TodoAllModel> {
  getData() {
    this.service.getDatas().subscribe((response) => {
      this.data = response;
    })
  }
  orgData: TodoAllModel[] = [];

  constructor(private service: TodoAllService) {
    super();
  }
}
