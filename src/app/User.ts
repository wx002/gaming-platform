import { Injectable } from '@angular/core';

@Injectable()
export class User{
  private userInfo = {};

  setOption(option, value): void{
    this.userInfo[option] = value;
  }

  get(){
    return this.userInfo;
  }

  clear(): void{
    this.userInfo = {};
  }
}
