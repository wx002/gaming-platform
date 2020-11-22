import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT, Location, LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private d: Document,
              @Inject(Location) private readonly location: Location,
              private ls: LocationStrategy) {
    const baseURL = window.location.origin + ls.getBaseHref();
    const redirectURI = baseURL + 'login/callback';
    console.log(`Redirect = ${redirectURI}`);
    const discordLogin = `https://discord.com/api/oauth2/authorize?client_id=764530278793347122&redirect_uri=${encodeURIComponent(redirectURI)}&response_type=code&scope=identify%20email`;
    window.location.href = discordLogin;
  }

  ngOnInit(): void {
  }



}
