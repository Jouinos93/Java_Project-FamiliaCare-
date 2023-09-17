import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscription } from '../models/subscription.model';

@Injectable({
    providedIn: 'root'
  })
  export class SubscriptionsService{
    private apiUrl = 'http://localhost:8080/api/addresses';

    constructor(private http: HttpClient) { }

    getAllSubscription(): Observable<Subscription[]> {
        return this.http.get<Subscription[]>(`${this.apiUrl}`);
    }

    getSubscription(subscribeId: number): Observable<Subscription>{
      return this.http.get<Subscription>(`${this.apiUrl}/${subscribeId}`);
    }

    deleteSubscription(subscribeId:number):Observable<Subscription>{
      return this.http.delete<Subscription>(`${this.apiUrl}/${subscribeId}`);
    }

    updateSubscription(subscribeId:number,value:any):Observable<any>{
      return this.http.put(`${this.apiUrl}/${subscribeId}`,value);
    }


  }