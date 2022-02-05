import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-list-pokemons-component',
  templateUrl: './list-pokemons-component.component.html',
  styleUrls: ['./list-pokemons-component.component.css']
})
export class ListPokemonsComponentComponent implements OnInit {
  pokemons: Pokemon[]=[];
  constructor() { }

  ngOnInit() {
    this.pokemons=POKEMONS;
  }

}
