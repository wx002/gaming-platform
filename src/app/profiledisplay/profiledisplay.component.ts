import {AfterContentInit, Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import {ProfileService} from '../user-profile/profile.service'
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

  constructor(u: User, private pService: ProfileService, private router: Router) {
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
    this.pService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.profiles = data;
    });
  }

  updateProfile(): void{
    //this.router.navigate([ '/addgames' ])

  }


  removeAllProfiles(): void {
    this.pService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}
