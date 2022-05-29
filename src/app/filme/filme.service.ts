import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from './filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private baseURL = 'http://localhost:8080'
  private endpoint = 'filme'

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(`${this.baseURL}/${this.endpoint}`)
  }
}
