import { LoginComponent } from './login/login.component';
import { DebugComponent } from './debug/debug.component';
import { OauthLoginComponent } from './oauth-login/oauth-login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamesComponent} from './games/games.component';
import {MygamesComponent} from './mygames/mygames.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'games', component: GamesComponent, children: [{
    path: 'games?index=type', component: GamesComponent
  }]},
  {path: 'home', component: HomeComponent},
  {path: 'userListing', component: ListsComponent},
  {path: 'myGames', component: MygamesComponent},
  {path: 'gameDisplay', component: GamedisplayComponent, children: [{
    path: 'gameDisplay?=type', component: GamedisplayComponent
  }]},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'login/callback', component: OauthLoginComponent, children: [{
    path: 'login/callback/:code', component: OauthLoginComponent
  }]},
  {path: 'debug', component: DebugComponent},
  {path: 'login', component: LoginComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingArray = [GamesComponent];
