import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css'
})
export class CardPokemonComponent {
  @Input({required:true})
  name = "";
}
