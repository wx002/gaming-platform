import { ListService } from './../services/list.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ListsService } from "../shared/lists.service";
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  //gameLists: any;
  myLists$;
  constructor(public listsService:ListsService, public route: ActivatedRoute) {
 //  const id: string = route.snapshot.paramMap.get('id');
  // console.log('list ID form URL: ', id)
   }

  ngOnInit() {
   // use ativated route to listen to state changes in url param
   // and when change happens calls swit h map to switch to obervable of actual list datea from firestore
    this.myLists$ = this.route.paramMap.pipe(
      switchMap(params => {
        //const id = params.get('id');
        const listTitle: string = this.route.snapshot.paramMap.get('listTitle');
        return this.listsService.firestore.doc('myLists/' + listTitle).valueChanges;
      })
    );
    }

}
