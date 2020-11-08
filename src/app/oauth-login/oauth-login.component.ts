import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-oauth-login',
  templateUrl: './oauth-login.component.html',
  styleUrls: ['./oauth-login.component.css']
})
export class OauthLoginComponent implements OnInit {
  code: string;
  currentUrl = '';
  res: { json: () => any; };
  oauthData = {
    client_id: '764530278793347122',
    client_secret: '0UPOGjJEplQiVCKfy1ANfGABBnm8ce50'
  };
  userJson;
  userInfo = {email: '', username: ''};
  constructor(private router: Router, private u: User) {
    this.exchangeToken();
  }

  ngOnInit(): void {
  }

  exchangeToken(): void{
    const fetch = require('node-fetch');
    const cid = this.oauthData[`client_id`];
    const secret = this.oauthData[`client_secret`];
    const codeExchange = this.getAccessCode();
    // console.log(`code here = ${codeExchange}`);
    const data = {
      client_id: cid,
      client_secret: secret,
      grant_type: 'authorization_code',
      redirect_uri: window.location.origin + '/login/callback',
      code: codeExchange,
      scope: 'identify email',
    };
    const headerString = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(discordRes => discordRes.json())
    .then(info => {
      console.log(info);
      return info;
    }).then(info => fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${info.token_type} ${info.access_token}`,
      },
    }))
    .then(userRes => userRes.json()).then(
      fetchedInfo => {
        console.log(fetchedInfo);
        this.userJson = JSON.stringify(fetchedInfo);
        const username = fetchedInfo[`username`];
        const email = fetchedInfo[`email`];
        // console.log(`Name = ${username}, Email = ${email}`);
        this.userInfo.email = email;
        this.userInfo.username = username;
        // console.log(`here info = ${JSON.stringify(this.userInfo)}`);
        this.u.setOption('email', this.userInfo.email);
        this.u.setOption('username', this.userInfo.username);
        // console.log(`here u = ${JSON.stringify(this.u)}`);
        this.router.navigateByUrl('/home');
      }
    );
  }


  getAccessCode(): string{
    const currentUrl = window.location.href;
    const url = require('url');
    const urlObj  = url.parse(currentUrl, true);
    if (urlObj .query.code){
      const accessCode = urlObj.query.code;
      return accessCode;
    }
  }


}
