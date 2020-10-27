import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamesComponent} from './games/games.component';
import {MygamesComponent} from './mygames/mygames.component';

const routes: Routes = [
  {path: 'games', component: GamesComponent, children: [{
    path: 'games?index=type', component: GamesComponent
  }]},
  {path: 'home', component: HomeComponent},
  {path: 'userListing', component: ListsComponent},
  {path: 'myGames', component: MygamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingArray = [GamesComponent];
