import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { gamesData } from './../services/gamesData';

@Injectable({ providedIn: 'root' })
export class GameDataService{
  getGames(index: string): Observable<string[]>{
    const allGames = Object.keys(gamesData);
    if (index === '' || index === '#' || index === null){
      return of(allGames);
    } else{
      const indexGames = [];
      let g;
      if(index){
        for (g in allGames){
          if (allGames[g][0] === index || allGames[g][0] === index.toLocaleUpperCase()){
            indexGames.push(allGames[g]);
          }
        }
      }else{
        return of(allGames);
      }
      return of(indexGames);
    }
  }

}
