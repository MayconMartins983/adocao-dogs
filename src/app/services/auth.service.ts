import { Observable } from 'rxjs';
import { LoginDto } from './../shared/models/login-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtDto } from '../shared/models/jwt-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(loginDto: LoginDto): Observable<JwtDto> {
    return this.http.post<JwtDto>(this.url + '/create-jwt', loginDto);
  }
}
