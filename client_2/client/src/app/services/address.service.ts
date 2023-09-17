import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../models/address.model';

@Injectable({
    providedIn: 'root'
  })
  export class AddressService{
    private apiUrl = 'http://localhost:8080/api/addresses';

    constructor(private http: HttpClient) { }

    getAllAddresss(): Observable<Address[]> {
        return this.http.get<Address[]>(`${this.apiUrl}`);
    }

    getAddress(adrId: number): Observable<Address>{
      return this.http.get<Address>(`${this.apiUrl}/${adrId}`);
    }

    deleteAddress(adrId:number):Observable<Address>{
      return this.http.delete<Address>(`${this.apiUrl}/${adrId}`);
    }

    updateAddress(adrId:number,value:Address):Observable<any>{
      return this.http.put(`${this.apiUrl}/${adrId}`,value);
    }


  }