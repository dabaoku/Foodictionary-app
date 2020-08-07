import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


export interface Response {
  message: string;
  data: any;
  probability: number;
  tagName: string;
  left: number;
  top: number;
  width: number;
  height: number;
  predictions: any;
}

@Injectable({
  providedIn: 'root'
})
export class FoodFilterUrlService {

  constructor(private http: HttpClient) { }
  request(photoUrl: string) {
    // Hans
    // tslint:disable-next-line: max-line-length
    // const apiUrl = 'https://3-ingredient-test1.cognitiveservices.azure.com/customvision/v3.0/Prediction/68cdf7c7-a15e-4889-beb0-ab6c16f34789/detect/iterations/Iteration1/url';
    // Andrew
    // tslint:disable-next-line: max-line-length
    const apiUrl = 'https://ncumis5.cognitiveservices.azure.com/customvision/v3.0/Prediction/4f6206cb-c39c-4634-8ebe-d97efbd24dcd/detect/iterations/Iteration1/url';

    const body  = {Url: photoUrl};
    // Hans
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Prediction-Key': 'b9dceed81b0a42888445ef7960679963',
    //   }),
    // };
    // Andrew
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Prediction-Key': '62840542864447d39b3236e928b6cd93',
      }),
    };
    console.log('service body:', body);


    return this.http.post<Response>(apiUrl, body, httpOptions).pipe(
      map((response) => {
        console.log('service response:', response);
        return{
          predictions: response.predictions,
          // probability: response.predictions[0].probability,
          // tagName: response.tagName,
          // left: response.left,
          // top: response.top,
          // width: response.width,
          // height: response.width,
        };
      }
        ),

      // catchError(this.handleError),
    );

    }
}
