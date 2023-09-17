import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';

@Injectable({
    providedIn: 'root'
  })
  export class ReviewService{
    private apiUrl = 'http://localhost:8080/api/reviews';

    constructor(private http: HttpClient) { }

    createReview(rev:Review):Observable<Review>{
      return this.http.post<Review>(`${this.apiUrl}`,rev);
    }

    getAllReviews(): Observable<Review[]> {
        return this.http.get<Review[]>(`${this.apiUrl}`);
    }

    getReview(adrId: number): Observable<Review>{
      return this.http.get<Review>(`${this.apiUrl}/${adrId}`);
    }

    deleteReview(adrId:number):Observable<Review>{
      return this.http.delete<Review>(`${this.apiUrl}/${adrId}`);
    }

    updateReview(adrId:number,value:Review):Observable<any>{
      return this.http.put(`${this.apiUrl}/${adrId}`,value);
    }

  }