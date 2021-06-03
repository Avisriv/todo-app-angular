import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoAllService {
  apiParameter = '';

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

  getTopics(name: string) {
    return this.httpClient
      .get<{}>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map(this.extractTopicData),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.message || 'server error.');
        })
      );
  }

  extractData(result: any): any {
    return result;
  }

  extractTopicData(result: any): string[] {
    return result.names;
  }
}
