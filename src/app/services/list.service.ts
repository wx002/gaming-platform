import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { List } from '../models/List';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  listCollection: AngularFirestoreCollection<List>;
  lists: Observable<List[]>;

  constructor(public afs: AngularFirestore) {
    this.lists = this.afs.collection('lists').valueChanges();
  }

  getLists(){
   return this.lists;
  }
}

