import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Action } from '../models/action.model';

@Injectable({
    providedIn: 'root'
  })
  export class ActionService{
    private apiUrl = 'http://localhost:8080/api/actions';

    constructor(private http: HttpClient) { }

    getAllActions(): Observable<Action[]> {
        return this.http.get<Action[]>(`${this.apiUrl}`);
    }

    getAction(adrId: number): Observable<Action>{
      return this.http.get<Action>(`${this.apiUrl}/${adrId}`);
    }

    deleteAction(adrId:number):Observable<Action>{
      return this.http.delete<Action>(`${this.apiUrl}/${adrId}`);
    }

    updateAction(adrId:number,value:Action):Observable<any>{
      return this.http.put(`${this.apiUrl}/${adrId}`,value);
    }

    createAction(value:Action):Observable<any>{
      return this.http.post(`${this.apiUrl}`,value);
    }

  }