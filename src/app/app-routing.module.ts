import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddedlistsComponent } from './addedlists-list/addedlists-list.component';
import { LoginComponent } from './login/login.component';
import { DebugComponent } from './debug/debug.component';
import { OauthLoginComponent } from './oauth-login/oauth-login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
// import { ListsComponent } from './lists/lists.component';
import { HomeComponent } from './home/home.component';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamesComponent} from './games/games.component';
import {MygamesComponent} from './mygames/mygames.component';
import { AddgamesComponent } from './addgames/addgames.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { ProfiledisplayComponent } from './profiledisplay/profiledisplay.component';
import { SubscribeListsComponent } from './subscribe-lists/subscribe-lists.component';

const routes: Routes = [
  {path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  {path: 'games', component: GamesComponent, children: [{
    path: 'games?index=type', component: GamesComponent
  }]},
  {path: 'landingpage', component: LandingPageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lists', component: AddedlistsComponent},
  {path: 'gameDisplay', component: GamedisplayComponent, children: [{
    path: 'gameDisplay?game=type', component: GamedisplayComponent
  }]},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'login/callback', component: OauthLoginComponent, children: [{
    path: 'login/callback?code=type', component: OauthLoginComponent
  }]},
  {path: 'login', component: LoginComponent},
  {path: 'myGames', component: MygamesComponent,
  children: [
    { path: 'myGames/:id', component: MygamesComponent }
  ]},
  {path: 'addgames', component: AddgamesComponent},
  {path: 'user-profile/:id', component: UserProfileComponent},
  {path: 'profileDisplay', component: ProfiledisplayComponent},
  {path: 'subscribeList', component: SubscribeListsComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingArray = [GamesComponent];
