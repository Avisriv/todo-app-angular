import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TodoActiveDataSource } from './todo-active.datasource';
import { State } from '../../app/store';
import { Store } from '@ngrx/store';
import { TodoAllModel } from '../models/todo-all.model';

@Component({
  selector: 'app-todo-active',
  templateUrl: './todo-active.component.html',
  styleUrls: ['./todo-active.component.css'],
})
export class TodoActiveComponent implements OnInit {
  displayedColumns: string[] = ['toggle', 'title', 'status', 'delete'];
  dataSourceActiveTasks = new TodoActiveDataSource(this.store);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.dataSourceActiveTasks.initData();
  }

  ngAfterViewInit(): void {
    this.dataSourceActiveTasks.paginator = this.paginator;
  }

  onEnter($event: any) {
    this.dataSourceActiveTasks.addItem($event.target.value);
    $event.target.value = null;
  }

  applyFilterTitle(event: KeyboardEvent): void {
    this.dataSourceActiveTasks.applyFilter(
      (event.target as HTMLInputElement).value
    );
  }

  clickRow(element: TodoAllModel) {
    this.dataSourceActiveTasks.deleteRow(element);
  }

  setTaskChecked(element: TodoAllModel) {
    this.dataSourceActiveTasks.setTaskChecked(element);
  }

  onTitleEnter($event: any, element: TodoAllModel) {
    this.dataSourceActiveTasks.updateItem(
      element.id,
      ($event.target as HTMLInputElement).value
    );
  }
}
