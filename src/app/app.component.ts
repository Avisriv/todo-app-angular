import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../app/store';
import { setNewItem } from './store/todo.actions';
import { TodoAllService } from './services/todo-all.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app-angular';

  constructor(private service: TodoAllService, private store: Store<State>) {}

  ngOnInit(): void {
    this.service.getDatas().subscribe((response) => {
      if (localStorage.getItem('firstInit') == null) {
        response.forEach((element) => {
          this.store.dispatch(
            setNewItem({
              item: {
                userId: element['userId'],
                id: element['id'],
                title: element['title'],
                completed: element['completed'],
              },
            })
          );
        });
      }
      localStorage.setItem('firstInit', 'yes');
    });
  }
}
