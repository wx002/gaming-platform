import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { gamesData } from './../services/gamesData';

@Injectable({ providedIn: 'root' })
export class GameDataService{
  getGames(index: string): Observable<string[]>{
    const allGames = Object.keys(gamesData);
    if (index === '' || index === '#'){
      return of(allGames);
    } else{
      const indexGames = [];
      let g;
      for (g in allGames){
        if (allGames[g][0] === index || allGames[g][0] === index.toLocaleUpperCase()){
          indexGames.push(allGames[g]);
        }
      }
      return of(indexGames);
    }
  }

}
