import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-by-id-page',
  templateUrl: './by-id-page.component.html',
  styleUrl: './by-id-page.component.css'
})
export class ByIdPageComponent {

  public pokemons: Pokemon[]=[]

  constructor(private pokemonsService: PokemonsService){

  }

  searchById(id:string): Pokemon[]{
    this.pokemonsService.searchId(id)
    .subscribe(response =>{
      if(!response){
        this.pokemons = []
      }else{
        this.pokemons = [response]
      }
    })
    return this.pokemons
  }

}
