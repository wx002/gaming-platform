import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public userInfo;
  constructor(u: User) {
    this.userInfo = JSON.stringify(u.get());
  }

  ngAfterViewInit(): void {
    (window as any).twttr.widgets.load();
  }

  ngOnInit(): void {
  }

}
