import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtUtilService {
  private jwtHelper: JwtHelperService;

  constructor() {
    this.jwtHelper = new JwtHelperService();
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  isTokenExpired(token?: string | null): boolean {
    if (!token) {
      token = this.getToken();
    }
    if (token) {
      return this.jwtHelper.isTokenExpired(token);
    }
    return true;
  }
  

  decodeToken(token?: string | null): any {
    if (!token) {
      token = this.getToken();
    }
    if (token) {
      return this.jwtHelper.decodeToken(token);
    }
    return null;
  }
  
}
