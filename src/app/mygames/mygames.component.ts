import { ListsService } from "../shared/lists.service";

import { Component, OnInit } from '@angular/core';
import {CustomList, List} from './types';
import {CustomLists} from './customizeList';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mygames',
  templateUrl: './mygames.component.html',
  styleUrls: ['./mygames.component.css']
})
export class MygamesComponent implements OnInit {
   customerLists: CustomList[] = CustomLists;
   gameLists: any;

  constructor(private router: Router, public listsService:ListsService) { }

  ngOnInit(): void {
    this.getAllLists();
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

}
