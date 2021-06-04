import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { TodoAllService } from '../todo-all/todo-all.service';
import { TodoActiveDataSource } from './todo-active.datasource';

@Component({
  selector: 'app-todo-active',
  templateUrl: './todo-active.component.html',
  styleUrls: ['./todo-active.component.css'],
})
export class TodoActiveComponent implements OnInit {

  displayedColumns: string[] = [
    'toggle',
    'title',
    'status',
  ];
  dataSourceActiveTasks = new TodoActiveDataSource(this.todoService);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private todoService: TodoAllService) {}

  ngOnInit(): void {

  }

  sortData(sort: Sort) {
  }
}
