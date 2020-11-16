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
  constructor(public listsService:ListsService, public route: ActivatedRoute, public firestore: AngularFirestore) {
 //  const id: string = route.snapshot.paramMap.get('id');
  // console.log('list ID form URL: ', id)
   }

  ngOnInit() {
    this.myLists$ = this.route.paramMap.pipe(
      switchMap(params => {
        //const id = params.get('id');
        const id: string = this.route.snapshot.paramMap.get('id');
        return this.firestore.doc('mygames/' + id).valueChanges;
      })
    );
    }

}
