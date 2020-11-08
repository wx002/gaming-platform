import { User } from './User';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GamesComponent } from './games/games.component';
import { ListsComponent } from './lists/lists.component';
import { MygamesComponent } from './mygames/mygames.component';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OauthLoginComponent } from './oauth-login/oauth-login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DebugComponent } from './debug/debug.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserProfileComponent,
    GamesComponent,
    ListsComponent,
    MygamesComponent,
    GamedisplayComponent,
    AboutusComponent,
    OauthLoginComponent,
    NavbarComponent,
    DebugComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [User],
  bootstrap: [AppComponent]
})
export class AppModule { }
