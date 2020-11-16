import { ListService } from './services/list.service';
import { ListsService } from './shared/lists.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { GamesComponent } from './games/games.component';
import { ListsComponent } from './lists/lists.component';
import { MygamesComponent } from './mygames/mygames.component';
import { GamedisplayComponent } from './gamedisplay/gamedisplay.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddlistComponent } from './addlist/addlist.component';

import { AddedlistsComponent } from './addedlists-list/addedlists-list.component';
import { AddgamesComponent } from './addgames/addgames.component';


import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { LetterBoldPipe } from './shared/letter-bold.pipe';
import { SearchFilterPipe } from './shared/filter.pipe';
import { ClickOutsideDirective } from './shared/dropdown.directive';
import { ListDetailComponent } from './list-detail/list-detail.component';


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
    AddlistComponent,
    AddedlistsComponent,
    AddgamesComponent,
    SearchComponent,
    LetterBoldPipe,
    SearchFilterPipe,
    ClickOutsideDirective,
    ListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [ListService, ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
