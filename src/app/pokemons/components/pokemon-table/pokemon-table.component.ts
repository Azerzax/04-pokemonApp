import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'pokemons-table',
  templateUrl: './pokemon-table.component.html',
  styleUrl: './pokemon-table.component.css',
})
export class PokemonTableComponent {

  @Input()
  public pokemons: Pokemon[]=[];



}
