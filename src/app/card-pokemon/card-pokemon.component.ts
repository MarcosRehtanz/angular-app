import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpPokemonService, IPokemonPokemon } from '../http-pokemon.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'card-pokemon',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.css'
})
export class CardPokemonComponent implements OnInit {
  // @Input({required:true}) name = "";
  @Input() url!: string;
  pokemon$!: Observable<IPokemonPokemon>;

  constructor(private pokemonService: HttpPokemonService){}

  seeStats(pokemon: IPokemonPokemon): void{
    console.log(pokemon)
  }

  ngOnInit():void {
    this.pokemon$ = this.pokemonService.getPokemonByUrl(this.url)
    // this.pokemonService.getPokemonByUrl(this.url).subscribe((res)=>{
    //   this.pokemon$ = res
    // });
  }
}
