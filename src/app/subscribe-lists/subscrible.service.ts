import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import subscribledList from './subscrible';

@Injectable({
  providedIn: 'root'
})

export class SubscribleService {
  private dbPath = '/subscribledLists';

  subscribledListRef: AngularFireList<subscribledList> = null;

  constructor(private db: AngularFireDatabase) {
    this.subscribledListRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<subscribledList> {
    return this.subscribledListRef;
  }

  create(list: subscribledList): any {
    return this.subscribledListRef.push(list);
  }

  update(key: string, value: any): Promise<void> {
    return this.subscribledListRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.subscribledListRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.subscribledListRef.remove();
  }
}
