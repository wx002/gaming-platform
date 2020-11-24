import {AfterContentInit, Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import {ProfileFirestoreService} from '../user-profile/profile.firestore.service'
import { Router } from '@angular/router';
import {User} from "../User";

@Component({
  selector: 'app-profiledisplay',
  templateUrl: './profiledisplay.component.html',
  styles: []
})
export class ProfiledisplayComponent implements OnInit, AfterContentInit {
  public userInfo;

  profiles: any;
  currentProfile= null;
  currentIndex = -1;
  title = '';

  constructor(u: User, private pfService: ProfileFirestoreService, private router: Router) {
    this.userInfo = JSON.stringify(u.get());

  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.retrieveProfiles();
  }

  refreshList(): void {
    console.log(this.profiles)
    this.currentProfile = null;
    this.currentIndex = -1;
    this.retrieveProfiles();
  }

  retrieveProfiles(): void {
    this.pfService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.profiles = data;
    });
  }




  switch(){

  }


  updateProfile(): void{
    //this.router.navigate([ '/addgames' ])

  }


}
