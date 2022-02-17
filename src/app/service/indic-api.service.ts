import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from "../../environments/environment";
import { Indication } from '../shared/model/indication';

@Injectable({
  providedIn: 'root'
})
export class IndicApiService {
  constructor(
    private http: HttpClient
  ) { }

  apiListAllIndications():Observable<Indication[]> {
    return this.http.get<Indication[]>(`${environment.baseUrl}Indicacoes`);
  }
  postIndication(data : Indication):Observable<Indication[]>{
    return this.http.post<Indication[]>(`${environment.baseUrl}Indicacoes`,data);
  }
  public apiGetDetails( url: string ):Observable<any> {
    return this.http.get<any>( url );
  }
  public apiDeleteIndication( id: number):Observable<any> {
    return this.http.delete(`${environment.baseUrl}Indicacoes/${id}`).pipe(take(1));
  }
}