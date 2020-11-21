import { PopularComponent } from './popular/popular.component';
import { User } from './User';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ListService } from './services/list.service';
import { ListsService } from './shared/lists.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AddlistComponent } from './addlist/addlist.component';
import { AddedlistsComponent } from './addedlists-list/addedlists-list.component';
import { AddgamesComponent } from './addgames/addgames.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { LetterBoldPipe } from './shared/letter-bold.pipe';
import { SearchFilterPipe } from './shared/filter.pipe';
import { ClickOutsideDirective } from './shared/dropdown.directive';

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
    PopularComponent,
    AddlistComponent,
    AddedlistsComponent,
    AddgamesComponent,
    SearchComponent,
    LetterBoldPipe,
    SearchFilterPipe,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [User],
  bootstrap: [AppComponent]
})
export class AppModule { }
