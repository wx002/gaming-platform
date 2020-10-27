import { HomeComponent } from './home/home.component';
import { MygamesComponent } from './mygames/mygames.component';
import { ListsComponent } from './lists/lists.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GamesComponent } from './games/games.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';

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
