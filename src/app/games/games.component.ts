import { Observable } from 'rxjs';
import { GameDataService } from './games.service';
import { gamesData } from './../services/gamesData';
import { GameInfo } from './../gamedisplay/gamedisplay.component';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  readonly alphaListing = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  public userInfo;
  public displayGames;
  public serviceGames: Observable<string[]>;
  constructor(u: User, private route: ActivatedRoute,
              private router: Router,
              private gameService: GameDataService) {
    this.userInfo = JSON.stringify(u.get());
    this.serviceGames = this.route.queryParams.pipe(switchMap(params => {
      const filters = params.index;
      return this.gameService.getGames(filters);
    }));

  }

  ngOnInit(): void {
  }

  getAllGames(): string[]{
    return Object.keys(gamesData);
  }

  getGamesByIndex(index: string): string[]{
    const allGames = this.getAllGames();
    const indexGames = [];
    let g;
    for (g in allGames){
      if (allGames[g][0] === index || allGames[g][0] === index.toLocaleUpperCase()){
        indexGames.push(allGames[g]);
      }
    }
    return indexGames;
  }

  reloadPage(): void{
    const indexVar = this.route.snapshot.queryParams[`index`];
    //this.router.navigate(['/games'], {queryParams: {index: indexVar}})
    //.then();
  }

}
