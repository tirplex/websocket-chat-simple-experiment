import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ChatService } from '../../services/chat.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-private-chat',
  templateUrl: './private-chat.component.html',
  styleUrls: ['./private-chat.component.css']
})
export class PrivateChatComponent implements OnInit {

  private userText: string = '';
  private user:User;
  private reciverId: number;

  // myList = document.getElementById("myList");

  constructor(
    private chatService: ChatService,
    private userService: UserService,
    private route: ActivatedRoute,
  ){
      this.user = userService.getUser();
  }

  ngOnInit() {
    this.reciverId = +this.route.snapshot.paramMap.get('id');
  }

 /*  sendMsg(): void {
    if (this.userText) {
      let message = {
        id: this.user.id,
        type: 'private',
        to: this.reciverId, 
        author: this.user.name,
        message: this.userText
      }
      // console.log('new message from client to websocket: ', message);
      this.chatService.add(message);
      this.chatService.messages.next(message);
      
      this.userText = '';
      // this.message.message = '';

    }
  }
 */
}