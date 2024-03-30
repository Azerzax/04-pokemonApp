import { Component } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../interfaces/pokemon';
import { filter, forkJoin, switchMap } from 'rxjs';

@Component({
  selector: 'app-by-type-page',
  templateUrl: './by-type-page.component.html',
  styleUrl: './by-type-page.component.css'
})
export class ByTypePageComponent {

  constructor(private pokemonsService: PokemonsService){
  }

  public pokemons: Pokemon[]=[];

  /*ESTO ES UN SERVICE ANIDADO, UN SUBSCRIBE DENTRO DE OTRO SUBSCRIBE, ESTA BIEN PERO SE PUEDE SIMPLIFICAR
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
  SE SIMPLIFICA CON SWITCHMAP DE LA SIGUIENTE MANERA: */

  searchByType(tipo: string) {
    this.pokemons = [];
    this.pokemonsService.searchType(tipo)
      .pipe(
        filter(response => !!response),//aqui se mira que el response no sea undefined, porque sino en la siguiente linea el switchmap no podria desglosarlo y buscar la variable "pokemon"
        switchMap(({pokemon}) => {
          const requests = pokemon.map(poke => this.pokemonsService.searchName(poke.pokemon.name));
          return forkJoin(requests);
        })
      )
      .subscribe(response2 => {
          response2.forEach(element => {
            this.pokemons.push(element);
          });
      });
  }

}
