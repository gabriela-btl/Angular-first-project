import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-list-pokemons-component',
  templateUrl: './list-pokemons-component.component.html',
  styleUrls: ['./list-pokemons-component.component.css']
})
export class ListPokemonsComponentComponent implements OnInit {


  searchTerm: string = "";
  pokemons: Pokemon[] = [];

  constructor(public pokemonServiceService: PokemonServiceService) {
   }

  ngOnInit(): void {
    this.pokemons = this.pokemonServiceService.getPokemon();
  }

  selectPokemon(pokemon: Pokemon) {
    return this.pokemonServiceService.selectPokemon(pokemon);
  }

  onDelete(id: number) {
    this.pokemonServiceService.onDelete(id);
    this.pokemons = this.pokemonServiceService.getPokemon();
  }

}
