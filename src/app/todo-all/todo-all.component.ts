import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TodoAllDataSource } from './todo-all.datasource';
import { State } from '../../app/store';
import { Store } from '@ngrx/store';
import { TodoAllModel } from '../models/todo-all.model';

@Component({
  selector: 'app-todo-all',
  templateUrl: './todo-all.component.html',
  styleUrls: ['./todo-all.component.css'],
})
export class TodoAllComponent implements OnInit {
  displayedColumns: string[] = ['toggle', 'title', 'status', 'delete'];
  dataSourceAllTasks = new TodoAllDataSource(this.store);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.dataSourceAllTasks.initData();
  }

  ngAfterViewInit(): void {
    this.dataSourceAllTasks.paginator = this.paginator;
  }

  onEnter($event: any) {
    this.dataSourceAllTasks.addItem($event.target.value);
    $event.target.value = null;
  }

  applyFilterTitle(event: KeyboardEvent): void {
    this.dataSourceAllTasks.applyFilter(
      (event.target as HTMLInputElement).value
    );
  }

  clickRow(element: TodoAllModel) {
    this.dataSourceAllTasks.deleteRow(element);
  }

  setTaskChecked(element: TodoAllModel) {
    this.dataSourceAllTasks.setTaskChecked(element);
  }

  onTitleEnter($event: any, element: TodoAllModel) {
    this.dataSourceAllTasks.updateItem(
      element.id,
      ($event.target as HTMLInputElement).value
    );
  }
}
