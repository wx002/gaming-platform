import { element } from 'protractor';
import { ListsService } from "../shared/lists.service";

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { CollectionReference, Query } from '@firebase/firestore-types';


export interface List {
  title: string;
  comments: string;
  games: string[];
 }

@Component({
  selector: 'app-mygames',
  templateUrl: './mygames.component.html',
  styleUrls: ['./mygames.component.css']
})
export class MygamesComponent implements OnInit {
    // lists
    gameLists: any;
    myLists$;

    // games
    games$: any;

    currentlist= false;
    currentIndex;


  constructor(private router: Router, public listsService:ListsService, private routerInfor: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAllLists();
   // this.lists$.subscribe(data => console.log(data));

   // reference myList documents as myLists$ property and call caluechanges() to listen to them as real-time obsevable
   this.myLists$ = this.listsService.firestore.collection('myLists').valueChanges();
   //console.log(this.routerInfor.snapshot.paramMap.get('id'));
  }


  getAllLists = () =>
    this.listsService
      .getAllLists()
      .subscribe(res => (this.gameLists = res));

  deleteList = data => this.listsService.deleteList(data);

 /* removeGame = game => {
    let index = this.gameList.indexOf(game);
    if (index > -1) this.gameList.splice(index, 1);
  }; */

  // deleteGameInList = gameName => {
  //  const listGames = this.myLists$.listGames;
 // }
 // newGames = listGames.filter(
 //   palette => palette.name !== paletteName
//)

  //deleteGame(data, game){


   // this.listsService.firestore.collection('myLists').doc(data.payload.doc.id).update({
     // gameList: firebase.default.firestore.FieldValue.arrayRemove("Final Fantasy XII")
  //  })
  //}

    // gameLists[currentIndex].payload.doc.data().gameList
    //this.listsService.firestore.collection('myLists').doc(data.payload.doc.id).update({
      // gameList: this.listsService.firestore.FieldValue.arrayRemove();
     // this.listsService.firestore.collection('myLists').doc(data.payload.doc.id) .ref.update({ gameList: firebase.firestore.FieldValue.arrayUnion(new_Item)})

     /* this.listsService.firestore.collection('myLists').add({
      gameList: firebase.default.firestore.FieldValue.increment(1),
    }) */

   // FieldValue.arrayRemove()


  markPrivate = data => this.listsService.updateList(data);


  // get image Urls
  getImgUrl(i:number): string{
    let idx = '';
    idx = i+'';
    return 'assets/images/'+ idx +'.png';
  }
  // create new list
  action(){
    this.router.navigate([ '/addgames' ])
 }

 listClickaction(){
  this.router.navigate([ '/:id' ])
}

  checkData(){
    console.log(this.currentIndex);
  }

  refresh(index){
    //this.router.navigate(['myGames', index])
    this.currentlist= true;
    this.currentIndex = index;

    //console.log(index);

  }


}
