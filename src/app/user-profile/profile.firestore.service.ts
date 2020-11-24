import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import userProfile from './userProfile';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProfileFirestoreService {
  private dbPath = '/userProfiles';
  userProfilesRef: AngularFirestoreCollection<userProfile> = null;
  userProfileCollectionRef: AngularFirestoreCollection<userProfile> = null;

  constructor(private firestore: AngularFirestore) {
    this.userProfilesRef = firestore.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<userProfile> {
    return this.userProfilesRef;
  }

  create(profile: userProfile): any {
    return this.userProfilesRef.add({ ...profile });
  }

  update(key: string, data: any): Promise<void> {
    return this.userProfilesRef.doc(key).update(data);
  }

  delete(key: string): Promise<void> {
    return this.userProfilesRef.doc(key).delete();
  }


/*  getUserByEmail(email: string): Observable<userProfile> {
    const collection = this.firestore.collection<userProfile>(this.dbPath, ref => ref.where('email', '==', email))
    const user$ = collection
      .valueChanges()
      .pipe(
        map(users => {
          const user = users[0];
          console.log(user);
          return user;
        })
      );

    return user$;
  }*/

  queryByEmail(email:string){
    return this.firestore.collection('userProfiles', ref =>  ref
        .where('email', '==', email)
    ).snapshotChanges();

/*    this.firestore.collection(this.dbPath, ref =>
      ref.where('email', '==', email).limit(1)).get().subscribe(profile => { if(profile.size >= 0) return profile;});*/



  }
  getUserKeyByEmail(){}


  getUserProfiles() {
    return this.firestore.collection(this.dbPath)
      .snapshotChanges()
      .pipe( map( (actions) =>
        actions.map( a =>
          {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            // @ts-ignore
            return {id, ...data}
          }
        )
      ));
  }

  getProfiles() {
    return this.firestore.collection(this.dbPath).snapshotChanges();
    //this.firestore.collection(this.dbPath).valueChanges();
  }


  createProfile(profile: userProfile){
    return this.firestore.collection(this.dbPath).add(profile);
  }

  updateProfile(profile: userProfile){
    delete profile.key;
    this.firestore.doc('userProfiles/' + profile.key).update(profile);
  }

  deleteProfile(profileKey: string){
    this.firestore.doc('userProfiles/' + profileKey).delete();
  }

}
