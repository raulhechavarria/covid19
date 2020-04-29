import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
//import 'rxj/add/operator/catch';
//import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {


  
  displayedColumns: string[] = ['ParentTitle', 'Title'];


  private REST_API_SERVER = 'https://api.covid19api.com/';

  constructor(private httpClient: HttpClient) { }

 

  findAll(): Observable<any> { // b
    return this.httpClient.get<any>(this.REST_API_SERVER + 'summary')
    }


}
