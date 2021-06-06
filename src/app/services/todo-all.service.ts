import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { TodoAllModel } from '../models/todo-all.model';

@Injectable({
  providedIn: 'root',
})
export class TodoAllService {

  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) {}

  getDatas(): Observable<TodoAllModel[]> {
    return this.httpClient
      .get<{}>(this.url)
      .pipe(
        map(this.extractData),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.message || 'server error.');
        })
      );
  }

  extractData(result: any): TodoAllModel[] {
    return result.slice(0, 10);
  }
}
