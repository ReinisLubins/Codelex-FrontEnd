import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../../../shared/models/chracter.model";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input()
  character?: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
