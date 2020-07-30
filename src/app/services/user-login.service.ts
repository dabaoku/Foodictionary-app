import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Credentials } from '../models/credentials.model';
import { User } from '../models/user.model';
export interface Response {

  message: string;
  member_id: any;
  member_name: any;
  email: any;
  api_token: any;

}

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {


  constructor(private http: HttpClient) { }


  /**
   * 傳送請求
   */
  request(credentials: Credentials) {
    const url = `http://140.115.87.146/api/login`;
    const body = credentials;
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',

      }),
    };
    console.log(body);

    return this.http.post<Response>(url, body, httpOptions).pipe(
      map((response) =>{
        console.log(response);
        return{
        member_id: response.member_id,
        member_name: response.member_name,
        email: response.email,
        accessToken: response.api_token
      } as User; }),
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
  }
}
