import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import {environment} from "../../environments/environment";
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
}