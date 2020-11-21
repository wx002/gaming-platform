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
    listComments: new FormControl(""),
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

  getAllListsAlphabetically() {
    return this.firestore
      .collection("myLists", ref => {
        return ref
        .orderBy('listTitle');
      }).snapshotChanges();
}

// for alphabetical indexing of lists
getListsAlphabeticallyA() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'a')
      .where('listTitle', '<=', 'b')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyB() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'b')
      .where('listTitle', '<=', 'c')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyC() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'c')
      .where('listTitle', '<=', 'd')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyD() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'd')
      .where('listTitle', '<=', 'e')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyE() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'e')
      .where('listTitle', '<=', 'f')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyF() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'f')
      .where('listTitle', '<=', 'g')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyG() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'g')
      .where('listTitle', '<=', 'h')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyH() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'h')
      .where('listTitle', '<=', 'i')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyI() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'i')
      .where('listTitle', '<=', 'j')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyJ() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'j')
      .where('listTitle', '<=', 'k')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyK() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'k')
      .where('listTitle', '<=', 'l')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyL() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'l')
      .where('listTitle', '<=', 'm')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyM() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'm')
      .where('listTitle', '<=', 'n')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyN() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'n')
      .where('listTitle', '<=', 'o')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyO() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'o')
      .where('listTitle', '<=', 'p')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyP() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'p')
      .where('listTitle', '<=', 'q')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyQ() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'q')
      .where('listTitle', '<=', 'r')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyR() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'r')
      .where('listTitle', '<=', 's')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyS() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 's')
      .where('listTitle', '<=', 't')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyT() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 't')
      .where('listTitle', '<=', 'u')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyU() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'u')
      .where('listTitle', '<=', 'v')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyV() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'v')
      .where('listTitle', '<=', 'w')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyW() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'w')
      .where('listTitle', '<=', 'x')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyX() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'x')
      .where('listTitle', '<=', 'y')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyY() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'y')
      .where('listTitle', '<=', 'z')
      .orderBy('listTitle');
    }).snapshotChanges();
}

getListsAlphabeticallyZ() {
  return this.firestore
    .collection("myLists", ref => {
      return ref
      .where('listTitle', '>=', 'z')
      .orderBy('listTitle');
    }).snapshotChanges();
}
/* getCoffeeOrders(): Observable<any> { */
}

