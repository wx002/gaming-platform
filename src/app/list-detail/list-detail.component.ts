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
  list$;
  constructor(public listsService:ListsService, public route: ActivatedRoute, public firestore: AngularFirestore) { }

  ngOnInit() {
    this.list$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.firestore.doc('mygames/' + id).valueChanges;
      })
    );
  }

}
