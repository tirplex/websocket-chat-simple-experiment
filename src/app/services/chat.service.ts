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
	
  public list: Object[] = [];
  public connectedUsers: User[] = [];
  public stars: number = 0; 

  public messages: Subject<Object>;
  
	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Object>>wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): Object => {
        let data = JSON.parse(response.data);

        if (data.type === 'system' && data.users){
          data.users.forEach(user => {
            if (this.connectedUsers.find(u => u.id === user.id ) == undefined ){
              this.connectedUsers.push(user);
            }       
          });
        }
        
        if(data.type === 'login'){
          this.connectedUsers.push({
            id: data.id,
            name: data.author,
            isLogin: true,
          })
        }

        if(data.type === 'logout'){
          let index = this.connectedUsers.findIndex(u => u.id === data.user_id)
          if (index != -1){
            this.connectedUsers.splice(index, 1);
          }       
        }

        if(data.type === 'star'){
          this.stars += 1;     
        }

        if(data.date){
          data.date = new Date(data.date);
        }
        if(data.type !== 'system'){
          this.list.push(data); 
        }

        return data;
			});
	}
 
  add(message: Object) {
		this.list.push(message);
		console.log('list', this.list);
  }
 
  clear() {
    this.list = [];
  }

} 