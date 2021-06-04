import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { TodoAllDataSource } from './todo-all.datasource';
import { TodoAllService } from './todo-all.service';

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
  dataSource = new TodoAllDataSource(this.service);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: TodoAllService) {}

  ngOnInit(): void {
    this.dataSource.getData();
  }

  sortData(sort: Sort) {
  }

  setTaskChecked(genre: any, $event: any): void {
    console.log(genre);
    console.log($event);
  }
}
