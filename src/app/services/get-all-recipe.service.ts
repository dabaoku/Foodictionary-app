import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface Response {
  message: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class GetAllRecipeService {

  constructor(private http: HttpClient) { }
  request(){
    const url = `http://140.115.87.146/api/recipe`;
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',

      }),
    };


    return this.http.get<Response>(url, httpOptions).pipe(
      map((response) => response.data),
      catchError(this.handleError),
    );
  }

 /**
   * 錯誤處理
   */
  private handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // "前端本身" or "沒連上網路" 而產生的錯誤
      console.error('An error occurred:', error.error.message);
    } else {
      // 後端回傳的錯誤訊息，error.error 之中會有為何失敗的原因
      console.error(`HTTP status code ${error.status}, reason: ${error.error}`);
    }
    // 最後的回傳值的型別應為 observable
    return throwError('Something bad happened; please try again later.');
  };


  }

