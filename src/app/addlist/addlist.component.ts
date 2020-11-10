import { Component, OnInit } from '@angular/core';
import { ListService } from './../services/list.service';
import { List } from '../models/List';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-addlist',
  templateUrl: './addlist.component.html',
  styleUrls: ['./addlist.component.css']
})
export class AddlistComponent implements OnInit {

 // public items: Observable<any[]>;

   lists: List[];
   constructor(private listService: ListService) {

  // constructor(db: AngularFirestore) {
   //  this.items = db.collection('/items').valueChanges();
 }

ngOnInit(): void {
 // this.listService.getLists().subscribe(lists => { uncomment this
 // console.log(lists);
 // });
}

   /* this.listService.getLists().subscribe(lists => {
      // console.log(lists);
      this.lists = lists;
    });
  } */

  /* listCollection: AngularFirestoreCollection<List>;
  lists: Observable<List[]>;

  constructor(public afs: AngularFirestore) {
 }

  ngOnInit(): void {
    this.afs.collection('lists').valueChanges().subscribe(lists => {
      console.log(lists);
    });
  } */
}
