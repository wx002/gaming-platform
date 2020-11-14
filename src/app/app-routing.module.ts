import { LoginComponent } from './login/login.component';
import { DebugComponent } from './debug/debug.component';
import { OauthLoginComponent } from './oauth-login/oauth-login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GamesComponent } from './games/games.component';
import { MygamesComponent } from './mygames/mygames.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: 'userListing', component: ListsComponent},
  {path: 'myGames', component: MygamesComponent},
  {path: 'gameDisplay', component: GamedisplayComponent},
  {path: 'userProfile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingArray = [GamesComponent];
