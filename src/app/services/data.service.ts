import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CharacterDetail } from '../model/character-detail';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly BASE_URL = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<CharacterDetail[]>{
    return this.http.get<any>(this.BASE_URL + 'character').pipe(
      map(data => data.results)
    );
  }
}
