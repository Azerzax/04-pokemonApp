import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByNamePageComponent } from './pages/by-name-page/by-name-page.component';
import { ByTypePageComponent } from './pages/by-type-page/by-type-page.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { ByIdPageComponent } from './pages/by-id-page/by-id-page.component';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PokemonTableComponent } from './components/pokemon-table/pokemon-table.component';



@NgModule({
  declarations: [
    ByNamePageComponent,
    ByTypePageComponent,
    PokemonPageComponent,
    ByIdPageComponent,
    PokemonTableComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule
  ]
})
export class PokemonsModule { }
