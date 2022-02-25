import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';

@Pipe({
  name: 'pokemonSearch'
})
export class PokemonSearchPipe implements PipeTransform {

  transform(value: Pokemon[], filterBy: string): Pokemon[] {
    filterBy = filterBy.toLocaleLowerCase();
    return value.filter((pokemon: Pokemon) => pokemon.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }

}
