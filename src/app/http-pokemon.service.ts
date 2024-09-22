import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}
export interface IPokemonSprite {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

export interface IPokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export interface IPokemonPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: IPokemonType[];
  sprites: IPokemonSprite;
  stats: IPokemonStat[];
}

export interface PokemonList {
  name: string;
  url: string;
}

export interface PokemonListAPI {
  results: PokemonList[];
}

@Injectable({
  providedIn: 'root',
})
export class HttpPokemonService {
  constructor(private http: HttpClient) {}
  getPokemonByUrl(url: string) {
    return this.http.get<IPokemonPokemon>(url);
  }
  getAllPokemon() {
    return this.http.get<PokemonListAPI>(
      'https://pokeapi.co/api/v2/pokemon?offset=0&limit=5'
    );
  }
}
