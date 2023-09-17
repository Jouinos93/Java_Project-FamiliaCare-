import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sitter } from '../models/sitter.model';
import { LoginUser } from '../models/loginUser.model';

@Injectable({
    providedIn: 'root'
  })
  export class SitterService{
    private apiUrl = 'http://localhost:8080/api/sitters';

    constructor(private http: HttpClient) { }

    registerSitter(sitter: Sitter): Observable<any> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
      return this.http.post<any>(`${this.apiUrl}/register`, sitter, { headers });
    }

    loginSitter(loginSitter: LoginUser):Observable<any>{
      return this.http.post<any>(`${this.apiUrl}/login`, loginSitter);
    }

    getAllSitters(): Observable<Sitter[]> {
        return this.http.get<Sitter[]>(`${this.apiUrl}`);
      }

    getSitter(adrId: number): Observable<Sitter>{
        return this.http.get<Sitter>(`${this.apiUrl}/${adrId}`);
      }

    updateSitters(sitterId:number,value:any):Observable<any>{
        return this.http.put(`${this.apiUrl}/${sitterId}`,value);
      }

    deleteSitter(adrId:number):Observable<Sitter>{
        return this.http.delete<Sitter>(`${this.apiUrl}/${adrId}`);
    }
    
  }