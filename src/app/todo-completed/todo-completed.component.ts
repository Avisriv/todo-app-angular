import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TodoCompletedDataSource } from './todo-completed.datasource';
import { State } from '../../app/store';
import { Store } from '@ngrx/store';
import { TodoAllModel } from '../models/todo-all.model';

@Component({
  selector: 'app-todo-completed',
  templateUrl: './todo-completed.component.html',
  styleUrls: ['./todo-completed.component.css'],
})
export class TodoCompletedComponent implements OnInit {
  displayedColumns: string[] = ['toggle', 'title', 'status', 'delete'];
  dataSourceCompletedTasks = new TodoCompletedDataSource(this.store);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.dataSourceCompletedTasks.initData();
  }

  ngAfterViewInit(): void {
    this.dataSourceCompletedTasks.paginator = this.paginator;
  }

  onEnter($event: any) {
    this.dataSourceCompletedTasks.addItem($event.target.value);
    $event.target.value = null;
  }

  applyFilterTitle(event: KeyboardEvent): void {
    this.dataSourceCompletedTasks.applyFilter(
      (event.target as HTMLInputElement).value
    );
  }

  clickRow(element: TodoAllModel) {
    this.dataSourceCompletedTasks.deleteRow(element);
  }

  setTaskChecked(element: TodoAllModel) {
    this.dataSourceCompletedTasks.setTaskChecked(element);
  }

  onTitleEnter($event: any, element: TodoAllModel) {
    this.dataSourceCompletedTasks.updateItem(
      element.id,
      ($event.target as HTMLInputElement).value
    );
  }
}
