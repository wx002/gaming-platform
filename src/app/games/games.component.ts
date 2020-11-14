import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  readonly alphaListing = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public userInfo;
  constructor(u: User) {
    this.userInfo = JSON.stringify(u.get());
  }

  ngOnInit(): void {

  }

}
