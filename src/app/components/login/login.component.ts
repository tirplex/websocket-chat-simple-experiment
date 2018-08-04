import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router} from '@angular/router';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:User;

  constructor(
    private router: Router,
    private userService: UserService,
    private chatService: ChatService,
  ) {
    this.user = userService.getUser();
  }

  login(){
		if (this.user.name) {
      //login
      this.user.isLogin = true;
      this.userService.setUser(this.user);
      this.router.navigate(['/chat']);

      let message = {
        id: this.user.id,
        type: 'login',
        to: 0,
        author: this.user.name,
        message: this.user.name + ' join Chat!'
      }
      // console.log('new message from client to websocket: ', message);
      // this.chatService.add(message);
      this.chatService.messages.next(message);
      
		} else {
			console.log('User need correct name');
		}
	}

  ngOnInit() {
  }

}
