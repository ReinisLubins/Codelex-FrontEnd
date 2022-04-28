import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character, CharacterApiResponse} from "../models/chracter.model";

@Injectable({
  providedIn: 'root'
})
export class  CharacterService {
  constructor(private  http: HttpClient) {
  }

  getCharacters(): Observable<CharacterApiResponse> {
    const url = 'https://rickandmortyapi.com/api/character';
    return this.http.get<CharacterApiResponse>(url)
  }

  getCharacter(id: string): Observable<Character> {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    return this.http.get<Character>(url);
  }
}
