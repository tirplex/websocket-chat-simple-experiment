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

  private userText = '';
  private user: User;
  private reciverId: number;

  constructor(
    private chatService: ChatService,
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
      this.user = userService.getUser();
  }

  ngOnInit() {
    this.reciverId = +this.route.snapshot.paramMap.get('id');
  }
}
