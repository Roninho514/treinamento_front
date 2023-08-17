import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private appUrl = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }

  getClientes(): Observable<any>{
    return this.http.get(`${this.appUrl}clientes`)
  }

}
