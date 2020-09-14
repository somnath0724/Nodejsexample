import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { PMR } from '../pmr';

@Injectable({
  providedIn: 'root'
})
export class PmrWebService {

  constructor(private readonly httpClient: HttpClient) { }

  public postForm(json: PMR, url: string){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.httpClient.post(url, json, httpOptions).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
    } else {
      return throwError(error);
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
    }
    return throwError(error);
  };
}
