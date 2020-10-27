import { Component, OnInit } from '@angular/core';

export class GameInfo {
  public cover: string;
  public title: string;
  public bio: string;
  public release_date: string;
  public genre: string;
  public type: string;
  public developer: string;
}

@Component({
  selector: 'app-gamedisplay',
  templateUrl: './gamedisplay.component.html',
  styleUrls: ['./gamedisplay.component.css']
})
export class GamedisplayComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.game.bio = "Join your crewmates in a multiplayer game of teamwork and betrayal! Play online or over local wifi with 4-10 players as you attempt to hold your spaceship together and return back to civilization. But beware...as there may be an alien impostor aboard!";
    this.game.cover = "https://cdn-products.eneba.com/resized-products/InlPQPt7WRDHBRnySANJHVQrS2whLdUdTX9JB7djmGw_350x200_3x-0.jpeg";
    this.game.developer = "Innersloth";
    this.game.genre = "Sci-fi";
    this.game.release_date = "June 15, 2018";
    this.game.title = "Among Us";
    this.game.type = "Multiplace, Online Co-Op, Indie";
  }

  game = new GameInfo();



}
