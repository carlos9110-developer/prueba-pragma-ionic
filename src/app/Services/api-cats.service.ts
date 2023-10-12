import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../Interfaces/Cat';;

@Injectable({
  providedIn: 'root'
})
export class ApiCatsService {

  private apiEndpoint = 'https://api.thecatapi.com/v1/breeds';
  private apiKey = 'bda53789-d59e-46cd-9bc4-2936630fde39';

  constructor(private http: HttpClient) {}

  getCats(): Observable<Cat[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<Cat[]>(this.apiEndpoint, { headers });
  }
}

