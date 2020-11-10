import { ListService } from './services/list.service';
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
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';

import { OrdersService } from './shared/orders.service';
import { ReactiveFormsModule } from '@angular/forms';


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
    OrdersComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [ListService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
