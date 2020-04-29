import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { infoType } from '../entity/infoType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  
  info: infoType[];
  displayedColumns: string[] = ['ParentTitle', 'Title'];


  private REST_API_SERVER = 'https://ghoapi.azureedge.net/api/';

  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://ghoapi.azureedge.net/api/DIMENSION/COUNTRY/DimensionValues";
  testApi = "https://ghoapi.azureedge.net/api/Dimension";
 
  

  findAll(): Observable<any> { // b
    return this.httpClient.get<any>(this.REST_API_SERVER + 'Dimension/COUNTRY/DimensionValues'); 
    }

    


  getinfo(): Observable<any> {
    return this.httpClient.get<any>(this.REST_API_SERVER + '/api/Dimension/COUNTRY/DimensionValues');
  }
}
