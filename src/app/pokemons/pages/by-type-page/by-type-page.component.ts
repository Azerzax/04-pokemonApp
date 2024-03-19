import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-by-type-page',
  templateUrl: './by-type-page.component.html',
  styleUrl: './by-type-page.component.css'
})
export class ByTypePageComponent {

  constructor(private pokemonsService: PokemonsService){
  }

  public pokemons: Pokemon[]=[];

  searchByType(tipo:string){
    this.pokemons=[];
    this.pokemonsService.searchType(tipo)
    .subscribe(response => {
      if (response) {
        response.pokemon.forEach(element => {
          this.pokemonsService.searchName(element.pokemon.name)
          .subscribe(response2=>{
            this.pokemons.push(response2)
          })
        });;
      }
    })
  }

}
