import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PokemonList { name: string; url: string }

export interface PokemonListAPI {
  results: PokemonList[];
}

@Injectable({
  providedIn: 'root',
})
export class HttpPokemonService {
  constructor(private http: HttpClient) {}
  getAllPokemon() {
    return this.http.get<PokemonListAPI>(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
    );
  }
}
