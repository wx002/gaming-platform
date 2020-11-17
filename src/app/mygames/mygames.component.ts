import { ListsService } from "../shared/lists.service";

import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';


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
