import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produto, produtos } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {


  }


  getCidadePeloCep(){
    return this.http.get(this.baseUrl);
  }

  getListProducts() : Observable<produtos>{
    return this.http.get<produtos>(`${this.baseUrl}produtos`)
  }

  getProductId(id: string) : Observable<produto>{
    return this.http.get<produto>(`${this.baseUrl}produtos/${id}`)
  }

  updateProduct(produto : produto): Observable<any>{
    return this.http.put(`${this.baseUrl}produtos/${produto.id}`, produto)
  }


}
