import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document, private router: Router) {
    const discordLogin = 'https://discord.com/api/oauth2/authorize?client_id=764530278793347122&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin%2Fcallback&response_type=code&scope=identify%20email';
    this.d.location.href = discordLogin;
  }

  ngOnInit(): void {
  }



}
