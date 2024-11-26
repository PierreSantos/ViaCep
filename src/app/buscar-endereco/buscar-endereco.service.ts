import { HttpClient } from '@angular/common/http';
import { Viacep } from './model/Viacep';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscarEnderecoService {
  private apiUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) {}

  public buscarCEP(cep: string): Observable<Viacep> {
    return this.http.get<Viacep>(`${this.apiUrl}/${cep}/json`);
  }
}
