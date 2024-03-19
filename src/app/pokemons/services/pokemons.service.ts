import { Pokemon } from './../interfaces/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Type } from '../interfaces/type';

@Injectable({providedIn: 'root'})
export class PokemonsService {

  private apiUrl: string ='https://pokeapi.co/api/v2'

  public pokemon!:Pokemon

  public type!:Type

  constructor(private httpClient: HttpClient) { }

  searchName(name: string): Observable<Pokemon> {
    const url = `${this.apiUrl}/pokemon/${name}/`;
    console.log(this.httpClient.get<Pokemon>(url));
    return this.httpClient.get<Pokemon>(url)
    .pipe(catchError(() => of(this.pokemon)));
  }

  searchId(id: string): Observable<Pokemon>{
    const url = `${this.apiUrl}/pokemon/${id}/`;
    console.log(this.httpClient.get<Pokemon>(url));
    return this.httpClient.get<Pokemon>(url)
      .pipe(catchError(() => of(this.pokemon)));
  }

  searchType(tipo: string): Observable<Type>{
    const url = `${this.apiUrl}/type/${tipo}/`;
    console.log(this.httpClient.get<Pokemon>(url));
    return this.httpClient.get<Type>(url)
      .pipe(catchError(() => of(this.type)));
  }

}
