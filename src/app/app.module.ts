import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GamesComponent } from './games/games.component';
import { ListsComponent } from './lists/lists.component';
import { MygamesComponent } from './mygames/mygames.component';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    GamesComponent,
    ListsComponent,
    MygamesComponent,
    GamedisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
