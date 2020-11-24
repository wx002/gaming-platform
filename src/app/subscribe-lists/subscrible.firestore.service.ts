import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import subscribledList from './subscrible';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})

export class SubscribleFirestoreService {
  private dbPath = '/subscribledLists';

  subscribledListRef: AngularFirestoreCollection<subscribledList> = null;

  constructor(private db: AngularFirestore) {
    this.subscribledListRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<subscribledList> {
    return this.subscribledListRef;
  }

  create(list: subscribledList): any {
    return this.subscribledListRef.add({ ...list });
  }

  getfiles() {
    return this.db.collection(this.dbPath).snapshotChanges();
  }

  delete(id: string) {
    return this.db
      .collection(this.dbPath)
      .doc(id)
      .delete();
  }
}
