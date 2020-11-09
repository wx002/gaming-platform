import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  user = 'amkasumi';
  title = 'Games Like Animal Crossing';
  description = '';

  lists: any[] = [
    { user: 'amkasumi', title: 'Games Like Animal Crossing', description: 'Chill games that involve mundane tasks. Can build things, dress up, raise pets, etc. Playtime = infinate.'},
    { user: 'yogataichi34', title: 'Best Games For Switch Lite', description: 'Some games are just waaay better on the regular switch console but these are games where the experience on the Lite is still very comparable.'},
    { user: 'rageofbahamut404', title: 'Fav Gacha Games', description: 'Mainly card-based'},
    { user: 'iloveanimalsss01', title: 'Worst Indie Games of 2020', description: 'All genres'},
];

  constructor() { }

  ngOnInit(): void {
  }

}
