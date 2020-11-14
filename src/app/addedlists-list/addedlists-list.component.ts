import { Component, OnInit } from '@angular/core';
import { ListsService } from "../shared/lists.service";

@Component({
  selector: 'app-addedlists-list',
  templateUrl: './addedlists-list.component.html',
  styleUrls: ['./addedlists-list.component.css']
})
export class AddedlistsComponent implements OnInit {
  gameLists: any;

  constructor(public listsService:ListsService) { }

  ngOnInit() {
    this.getAllLists();
  }

  getAllLists = () =>
    this.listsService
      .getAllLists()
      .subscribe(res => (this.gameLists = res));

  deleteList = data => this.listsService.deleteList(data);

  markCompleted = data => this.listsService.updateList(data);

}
