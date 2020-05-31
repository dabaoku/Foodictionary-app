import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export interface Response {
  message: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class FoodFillterUrlService {

  constructor(private http: HttpClient) { }
  request(photoUrl: string) {
    // tslint:disable-next-line: max-line-length
    const apiUrl = 'https://3-ingredient-test1.cognitiveservices.azure.com/customvision/v3.0/Prediction/68cdf7c7-a15e-4889-beb0-ab6c16f34789/detect/iterations/Iteration1/url';
    const body  = {photoUrl};
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Prediction-Key': 'b9dceed81b0a42888445ef7960679963',
      }),
    };

    return this.http.post<Response>(apiUrl, body, httpOptions).pipe(
      map((response) => response.data),
      // catchError(this.handleError),
    );

    }
}
