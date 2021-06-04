import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { TodoActiveDataSource } from '../todo-active/todo-active.datasource';
import { TodoCompletedDataSource } from '../todo-completed/todo-completed.datasource';
import { TodoAllDataSource } from './todo-all.datasource';
import { TodoAllService } from './todo-all.service';
import { State } from '../../app/store';
import * as fromTodoListSelectors from '../store/selectors';


@Component({
  selector: 'app-todo-all',
  templateUrl: './todo-all.component.html',
  styleUrls: ['./todo-all.component.css'],
})
export class TodoAllComponent implements OnInit {

  displayedColumns: string[] = [
    'toggle',
    'title',
    'status',
  ];
  dataSourceAllTasks = new TodoAllDataSource(this.store);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: TodoAllService, private store: Store<State>) {}

  ngOnInit(): void {
    this.service.getDatas().subscribe((response) => {
      this.store.select(fromTodoListSelectors.getTodoItems);
      this.dataSourceAllTasks.setData(response);
    })
  }

  sortData(sort: Sort) {
  }


}
