import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  constructor(public firestore: AngularFirestore) {}

  form = new FormGroup({
    listTitle: new FormControl(""),
    listNumber: new FormControl(""),
    listGames: new FormControl(""),
    private: new FormControl(false)
  });

  //Firestore CRUD actions example
  createList(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("myLists")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateList(data) {
    return this.firestore
      .collection("myLists")
      .doc(data.payload.doc.id)
      .set({ private: true }, { merge: true });
  }

  getAllLists() {
    return this.firestore.collection("myLists").snapshotChanges();
  }

  deleteList(data) {
    return this.firestore
      .collection("myLists")
      .doc(data.payload.doc.id)
      .delete();
  }

  getListID(data){
    this.firestore
      .collection("myLists")
      .doc(data.payload.doc.id).get();
  }

}




// getCoffeeOrders(): Observable<any> {
