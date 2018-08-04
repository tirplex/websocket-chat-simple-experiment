import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private user: User = {
    id: Date.now(), //simle uniq id realization
    name: '',
    isLogin: false,
  };

  public getUser():User{
    return this.user;
  }

  public setUser(user: User):void{
    this.user = user;
  }

  public checkAuth():void {
    if(!this.user.isLogin){
      this.router.navigate(['/login']);
    }
  }


  constructor(
    private router: Router,
  ) { }
}
