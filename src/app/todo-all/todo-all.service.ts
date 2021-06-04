import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { TodoAllModel } from './todo-all.model';

@Injectable({
  providedIn: 'root',
})
export class TodoAllService {
  apiParameter = '';
  orgData: TodoAllModel[] = [];

  constructor(private httpClient: HttpClient) {}

  getDatas(): Observable<any> {
    return this.httpClient
      .get<{}>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map(this.extractData),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.message || 'server error.');
        })
      );
  }

  extractData(result: any): any {
    console.log(result);
    this.orgData = result;
    return result;
  }

  getData() {
    return this.orgData;
  }
}
