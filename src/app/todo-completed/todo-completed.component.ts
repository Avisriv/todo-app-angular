import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { TodoCompletedDataSource } from './todo-completed.datasource';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css'],
})
export class TodoCompletedComponent implements OnInit {

  displayedColumns: string[] = [
    'toggle',
    'title',
    'status',
  ];
  dataSourceCompletedTasks = new TodoCompletedDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {

  }

  sortData(sort: Sort) {
  }
}
