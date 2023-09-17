import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { LoginUser } from '../models/loginUser.model';


@Injectable({
    providedIn: 'root'
  })
  export class UserService{
    private apiUrl = 'http://localhost:8080/api/users';
  
    constructor(private http: HttpClient) { }
    
    registerUser(user: User): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');        
        return this.http.post<any>(`${this.apiUrl}/register`, user, { headers });
    }

    loginUser(loginUser: LoginUser):Observable<any>{
      //const headers = new HttpHeaders().set('Content-Type', 'application/json');
      console.log(loginUser," ////this is from the service");
      return this.http.post<any>(`${this.apiUrl}/login`, loginUser);
    }

    getUserById(userId: number) {
        return this.http.get(`${this.apiUrl}/${userId}`);
      }

    getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
    }

    updateUser(userId:number,value:User):Observable<any>{
      return this.http.put(`${this.apiUrl}/${userId}`,value);
    }

    logout() {
      
      localStorage.removeItem('token');
      sessionStorage.clear();

    }
  }