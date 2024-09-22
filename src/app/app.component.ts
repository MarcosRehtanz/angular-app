import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';
import { HttpPokemonService, PokemonList } from './http-pokemon.service';
import { AsyncPipe } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardPokemonComponent, AsyncPipe],
  template: `
    <h1>Welcome to Angular!</h1>
    <p>Hello {{ city }}, {{ 1 + 1 }}</p>
    @for (item of pokemons$ | async; track item.name) {
      <card-pokemon [name]="item.name" >{{item.url}}</card-pokemon>
    }
  `,
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-app';
  city = 'Bahía Blanca';
  pokemons$!: Observable<PokemonList[]>;
  constructor(private pokemonService: HttpPokemonService){};
  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getAllPokemon().pipe(map(response => response.results));
  }
}
