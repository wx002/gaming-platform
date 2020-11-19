import { Component, OnInit } from '@angular/core';
import { ListsService } from "../shared/lists.service";

@Component({
  selector: 'app-addedlists-list',
  templateUrl: './addedlists-list.component.html',
  styleUrls: ['./addedlists-list.component.css']
})
export class AddedlistsComponent implements OnInit {
  gameLists: any;

  constructor(public listsService: ListsService) { }

  ngOnInit() {
    this.getAllListsAlphabetically();
  }

  deleteList = data => this.listsService.deleteList(data);

  markPrivate = data => this.listsService.updateList(data);

  getAllLists = () =>
    this.listsService
      .getAllLists()
      .subscribe(res => (this.gameLists = res));


  getAllListsAlphabetically = () =>
  this.listsService
    .getAllListsAlphabetically()
    .subscribe(res => (this.gameLists = res));

  // Get lists by alphabetical index
  getListsAlphabeticallyA = () =>
  this.listsService
    .getListsAlphabeticallyA()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyB = () =>
  this.listsService
    .getListsAlphabeticallyB()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyC = () =>
  this.listsService
    .getListsAlphabeticallyC()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyD = () =>
  this.listsService
    .getListsAlphabeticallyD()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyE = () =>
  this.listsService
    .getListsAlphabeticallyE()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyF = () =>
  this.listsService
    .getListsAlphabeticallyF()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyG = () =>
  this.listsService
    .getListsAlphabeticallyG()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyH = () =>
  this.listsService
    .getListsAlphabeticallyH()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyI = () =>
  this.listsService
    .getListsAlphabeticallyI()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyJ = () =>
  this.listsService
    .getListsAlphabeticallyJ()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyK = () =>
  this.listsService
    .getListsAlphabeticallyK()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyL = () =>
  this.listsService
    .getListsAlphabeticallyL()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyM = () =>
  this.listsService
    .getListsAlphabeticallyM()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyN = () =>
  this.listsService
    .getListsAlphabeticallyN()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyO = () =>
  this.listsService
    .getListsAlphabeticallyO()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyP = () =>
  this.listsService
    .getListsAlphabeticallyP()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyQ = () =>
  this.listsService
    .getListsAlphabeticallyQ()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyR = () =>
  this.listsService
    .getListsAlphabeticallyR()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyS = () =>
  this.listsService
    .getListsAlphabeticallyS()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyT = () =>
  this.listsService
    .getListsAlphabeticallyT()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyU = () =>
  this.listsService
    .getListsAlphabeticallyU()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyV = () =>
  this.listsService
    .getListsAlphabeticallyV()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyW = () =>
  this.listsService
    .getListsAlphabeticallyW()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyX = () =>
  this.listsService
    .getListsAlphabeticallyX()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyY = () =>
  this.listsService
    .getListsAlphabeticallyY()
    .subscribe(res => (this.gameLists = res));

    getListsAlphabeticallyZ = () =>
    this.listsService
      .getListsAlphabeticallyZ()
      .subscribe(res => (this.gameLists = res));
  }

