import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../shared/models/dog';

@Injectable({
  providedIn: 'root',
})
export class DogService {
  url: string = 'http://localhost:8080/dog';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/mixed;boundary=YourBoundaryOfChoiceHere',
    }),
  };

  constructor(private http: HttpClient) {}

  create(file: FormData): Observable<Dog> {
    return this.http.post<Dog>(this.url, file);
  }

  getAllNaoAdotados(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.url + '/nao-adotados');
  }

  getAllAdotados(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.url + '/adotados');
  }

  findByCodigo(code: any): Observable<Dog> {
    return this.http.get<Dog>(this.url + '/code/' + code);
  }
}
