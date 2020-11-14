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
    const appName = '/gaming-platform'; // for deployment
    const baseURL = window.location.origin + appName;
    const discordLogin = `https://discord.com/api/oauth2/authorize?client_id=764530278793347122&redirect_uri=${encodeURIComponent(baseURL + '/login/callback')}&response_type=code&scope=identify%20email`;
    this.d.location.href = discordLogin;
  }

  ngOnInit(): void {
  }



}
