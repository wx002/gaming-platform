import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import {ProfileService} from './profile.service'
import userProfile from './userProfile';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import { User } from '../User';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public userInfo;

  profile: userProfile = new userProfile();
  submitted = false;
  isNew = false;
  currentKey;
  currentProfile= null;
  message = '';

  constructor(u: User, private pService: ProfileService , private routerInfor: ActivatedRoute, private router: Router) {
    this.userInfo = JSON.stringify(u.get());
  }

  ngOnInit(): void {
    const id = this.routerInfor.snapshot.paramMap.get('id');
    console.log(id);
    if((id == '0')){
      this.isNew = true;
    }else{
      this.currentKey = id;
    }


  }

  saveProfile(): void {
    this.pService.create(this.profile).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  updateProfile(): void {
    const data = {
      userName: this.profile.userName,
      email: this.profile.email,
      gender: this.profile.gender,
      phone: this.profile.phone
    };

    this.pService.update(this.currentKey, data)
      .then(() => this.message = 'The tutorial was updated successfully!')
      .catch(err => console.log(err));
  }

  onSubmit(f: NgForm) {
    console.log('submit value', f.value);
    this.saveProfile();
  }

  onReset(f: NgForm) {
    f.reset();
  }

  Gender: string[] = [
    'Female',
    'Male',
    'Non-binary'
  ];
}
