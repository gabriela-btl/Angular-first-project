import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor() { }

  pokemons: Pokemon[]=POKEMONS;
  searchTerm: string = "";

  getPokemon(): Pokemon[] {
    return this.pokemons;
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon.name);
  }

  onDelete(id:number) {
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => pokemon.id != id)
}

}
