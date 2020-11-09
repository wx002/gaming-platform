import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userInfo;
  constructor(@Inject(DOCUMENT) private d: Document, private router: Router, private u: User, ) {
    this.userInfo = u.get();
  }
  ngOnInit(): void {
  }

  login(): void{
    this.router.navigateByUrl('/login');
  }

  isLogin(): boolean{
    if ('email' in this.u.get()){
      return true;
    }
    return false;
  }

  logoff(): void{
    this.u.clear();
    // redirect
    this.d.location.href = window.location.origin + '/home';
  }

}
