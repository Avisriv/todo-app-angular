import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { TodoActiveDataSource } from './todo-active.datasource';
import { State } from '../../app/store';
import { Store } from '@ngrx/store';

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

  clickRow(element: any) {
    this.dataSourceActiveTasks.deleteRow(element);
  }

  setTaskChecked(genre: any) {
    this.dataSourceActiveTasks.setTaskChecked(genre);
  }

  onTitleEnter($event: any, element: any) {
    this.dataSourceActiveTasks.updateItem(
      element.id,
      ($event.target as HTMLInputElement).value
    );
  }
}
