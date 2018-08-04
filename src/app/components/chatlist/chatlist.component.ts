import { Component, OnInit, AfterContentInit, ElementRef, ViewChild } from '@angular/core';

import { ChatService } from '../../services/chat.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css'],
})
export class ChatlistComponent implements OnInit, AfterContentInit {

  @ViewChild('chatlist') private myScrollContainer: ElementRef;

  private userText: string = '';
  private user:User;

  // myList = document.getElementById("myList");

  constructor(
    private chatService: ChatService,
    private userService: UserService,
  ){
      this.user = userService.getUser();
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterContentInit() {
    this.scrollToBottom();

  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        this.myScrollContainer.nativeElement.scrollTop = 9999999;
        // console.log(this.myScrollContainer.nativeElement, this.myScrollContainer.nativeElement.scrollTop);
        
    } catch(err) { }                 
  }

}


