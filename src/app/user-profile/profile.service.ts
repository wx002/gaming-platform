import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import userProfile from './userProfile';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private dbPath = '/userProfiles';

  userProfilesRef: AngularFireList<userProfile> = null;

  constructor(private db: AngularFireDatabase) {
    this.userProfilesRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<userProfile> {
    return this.userProfilesRef;
  }

  create(profile: userProfile): any {
    return this.userProfilesRef.push(profile);
  }

  update(key: string, value: any): Promise<void> {
    return this.userProfilesRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.userProfilesRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.userProfilesRef.remove();
  }
}
