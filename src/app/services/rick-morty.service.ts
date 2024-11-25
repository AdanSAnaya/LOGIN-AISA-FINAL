import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getCharactersPaginated(page: number, pageSize: number): Observable<any> {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  return this.http.get<any>(url);
}
}
