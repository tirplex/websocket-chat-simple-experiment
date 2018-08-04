import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

import { Message } from '../models/message';
import { User } from '../models/user';

// const CHAT_URL = 'ws://echo.websocket.org/';
const CHAT_URL = 'wss://do.brainfaq.ru/chat?token=g6vvucKrCUZ3PTvL0F8R6cjdFi0qGyEgrdvEzVgFsRyBE1FEticHiGHTgWVJetq3';

@Injectable({
    providedIn: 'root'
})

export class ChatService {
	
  public list: Message[] = [];
  public connectedUsers: User[] = []; 

  public messages: Subject<Message>;
  
	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        
        this.list.push(data); 

        if(data.type = 'login'){
          this.connectedUsers.push({
            id: data.id,
            name: data.author,
            isLogin: true,
          })
        }
        
				return {
          id: data.id,
          type: data.type,
          to: data.to,
          author: data.author,
					message: data.message
				}
			});
	}
 
  add(message: Message) {
		this.list.push(message);
		console.log('list', this.list);
  }
 
  clear() {
    this.list = [];
  }

} 