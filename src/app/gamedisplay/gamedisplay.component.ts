import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { gamesData } from '../services/gamesData';
import { User } from '../User';

export class GameInfo {
  public title: string;
  public desc: string;
  public genre: string;
  public type: string;
  public publisher: string;
  public postiveRate: string;
  public negativeRate: string;
  public platforms: string;
}

@Component({
  selector: 'app-gamedisplay',
  templateUrl: './gamedisplay.component.html',
  styleUrls: ['./gamedisplay.component.css']
})
export class GamedisplayComponent implements OnInit {
  public userInfo;
  constructor(u: User, private route: ActivatedRoute) {

  }

  game = new GameInfo();

  ngOnInit(): void {
    const gameLib = gamesData;
    const gameTitle = this.route.snapshot.queryParams[`game`];
    const selectedGame = gameLib[gameTitle];
    this.game.title = selectedGame['Name'];
    this.game.desc = selectedGame['Desc'];
    this.game.publisher = selectedGame['Publisher'];
    this.game.platforms = selectedGame['Platforms'];
    this.game.type = selectedGame['Type'];
    this.game.genre = selectedGame['Genre'];
    this.game.postiveRate = selectedGame['Positive_ratings'];
    this.game.negativeRate = selectedGame['Negative_ratings'];

  }



}
