import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'pokemons-by-name-page',
  templateUrl: './by-name-page.component.html',
  styleUrl: './by-name-page.component.css'
})
export class ByNamePageComponent {

  public pokemon!: Pokemon;

  public pokemons: Pokemon[] = [];

  constructor(private pokemonsService: PokemonsService){

  }

  searchByName( name: string): void{
    console.log(name);
    this.pokemonsService.searchName(name)
      .subscribe(response => {
        this.pokemon = response
        console.log(this.pokemon)
        if (!this.pokemon) {
          this.pokemons = []
        }else{
          this.pokemons = [this.pokemon]
        }
        console.log(this.pokemons)
      });
  }

}
