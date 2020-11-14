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
  // init oauth client data
  oauthData = {
    client_id: '764530278793347122',
    client_secret: '0UPOGjJEplQiVCKfy1ANfGABBnm8ce50'
  };
  userJson;
  // user info class variable
  userInfo = {email: '', username: ''};

  // init constructor for code exchange
  constructor(private router: Router, private u: User) {
    this.exchangeToken();
  }

  ngOnInit(): void {
  }

  exchangeToken(): void{
    /** Exchange token function via discord.js */
    const fetch = require('node-fetch');
    const cid = this.oauthData[`client_id`];
    const secret = this.oauthData[`client_secret`];
    const codeExchange = this.getAccessCode();
    console.log(`code = ${codeExchange}`);

    // post data setup for token exchange
    const data = {
      client_id: cid,
      client_secret: secret,
      grant_type: 'authorization_code',
      redirect_uri: window.location.origin + '/gaming-platform/login/callback',
      code: codeExchange,
      scope: 'identify email',
    };
    const headerString = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    // fetch the token via POST request
    console.log('posting....');
    fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }, // chain this since it is a promise, need to wait for completion before proceeding
    }).then(discordRes => discordRes.json())
    .then(info => {
      console.log(info);
      return info; // return such info and fetch the user info using the token
    }).then(info => fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${info.token_type} ${info.access_token}`,
      },
    })) // once the fetch is complete, extract the response JSON
    .then(userRes => userRes.json()).then(
      fetchedInfo => {
        console.log(fetchedInfo);
        this.userJson = JSON.stringify(fetchedInfo);
        const username = fetchedInfo[`username`];
        const email = fetchedInfo[`email`];
        // pass the fetched info into class variable
        this.userInfo.email = email;
        this.userInfo.username = username;
        // set this into our data service to use in other components
        this.u.setOption('email', this.userInfo.email);
        this.u.setOption('username', this.userInfo.username);
        // we are now successfully logged in and verify by discord, proceed to home page
        this.router.navigateByUrl('/home');
      }
    );
  }


  getAccessCode(): string{
    // maunally extract the redirect code to init token exchange
    // this is the code inside the callback link, example: /login/callback?code={ACCESS_CODE}
    // we could only request token to verify users using this access code
    const currentUrl = window.location.href;
    const url = require('url');
    const urlObj  = url.parse(currentUrl, true);
    if (urlObj .query.code){
      const accessCode = urlObj.query.code;
      return accessCode;
    }
  }
}
