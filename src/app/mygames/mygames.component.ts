import { Component, OnInit } from '@angular/core';
import {CustomList, List} from './types';
import {CustomLists} from './customizeList';

@Component({
  selector: 'app-mygames',
  templateUrl: './mygames.component.html',
  styleUrls: ['./mygames.component.css']
})
export class MygamesComponent implements OnInit {
  customerLists: CustomList[] = CustomLists;

  constructor() { }

  ngOnInit(): void {
  }
  // get image Urls
  getImgUrl(i:number): string{
    let idx = '';
    idx = i+'';
    return 'assets/images/'+ idx +'.png';
  }
}
