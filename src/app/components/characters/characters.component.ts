import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../../shared/services/character.service";
import {map, Observable, Subscription} from "rxjs";
import {Character} from "../../shared/models/chracter.model";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  characters$: Observable<Character[]> = this.characterService.getCharacters().pipe(
    map(charactersResponse => charactersResponse.results)
  );

  constructor(private characterService: CharacterService) { }
}


