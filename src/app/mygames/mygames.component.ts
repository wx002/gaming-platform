import { ListsService } from "../shared/lists.service";

import { Component, OnInit } from '@angular/core';
import {CustomLists} from './customizeList';
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

   //customerLists: CustomList[] = CustomLists;
    gameLists: any;
   myLists$;

  constructor(private router: Router, public listsService:ListsService) {

     }

  ngOnInit() {
    this.getAllLists();
   // this.lists$.subscribe(data => console.log(data));

   // reference myList documents as myLists$ property and call caluechanges() to listen to them as real-time obsevable
   this.myLists$ = this.listsService.firestore.collection('myLists').valueChanges();
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

  action(){
    this.router.navigate([ '/addgames' ])
 }

 listClickaction(){
  this.router.navigate([ '/:id' ])
}

}
