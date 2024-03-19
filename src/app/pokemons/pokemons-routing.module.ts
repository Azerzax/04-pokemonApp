import { NgModule } from '@angular/core';
import { ByIdPageComponent } from './pages/by-id-page/by-id-page.component';
import { ByNamePageComponent } from './pages/by-name-page/by-name-page.component';
import { ByTypePageComponent } from './pages/by-type-page/by-type-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';

const routes: Routes = [

  {
    path:'by-id',
    component: ByIdPageComponent
  },
  {
    path:'by-name',
    component: ByNamePageComponent
  }
  ,
  {
    path:'by-type',
    component: ByTypePageComponent
  }
  ,
  {
    path:'by/:id',
    component: PokemonPageComponent
  },
  {
    path:'**',
    redirectTo: 'by-name'
  }

];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class PokemonsRoutingModule { }
