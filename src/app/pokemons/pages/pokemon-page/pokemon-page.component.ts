import { Pokemon } from './../../interfaces/pokemon';
import { PokemonsService } from './../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css'
})
export class PokemonPageComponent implements OnInit{

  public pokemon?: Pokemon

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonsService: PokemonsService,
    private router: Router
    ){

  }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.pokemonsService.searchId(id)),
    )
    .subscribe((reponse) =>{
      if(!reponse){
        return this.router.navigateByUrl('');
      }
      this.pokemon = reponse
      return
    })

  }

}
