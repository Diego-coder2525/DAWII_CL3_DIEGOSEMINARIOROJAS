import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rickMorty } from './rick-morty';

@Injectable({
  providedIn: 'root'
})
export class RickMortyServiceService {

  constructor(private http:HttpClient) { }

  listarRickMorty() : Observable<rickMorty[]>{
    return this.http.get<rickMorty[]>('https://rickandmortyapi.com/api/episode');
  }
}
