import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from './websocket.service';

// const CHAT_URL = 'ws://echo.websocket.org/';
const CHAT_URL = 'wss://do.brainfaq.ru/chat?token=g6vvucKrCUZ3PTvL0F8R6cjdFi0qGyEgrdvEzVgFsRyBE1FEticHiGHTgWVJetq3';


export interface Message {
	author: string,
	message: string
}

@Injectable({
    providedIn: 'root'
})

export class ChatService {

  // public list: Message[];
	
	list: Message[] = [];

  public messages: Subject<Message>;
  
	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): Message => {
        let data = JSON.parse(response.data);

        this.list.push(data);
        // console.log(response, typeof response);
        // console.log(data, typeof data);
        // console.log('list =>> ', this.list);
        
        
				return {
          author: data.author,
					message: data.message
				}
			});
      // console.log(this.list, typeof this.list);
	}

 
  add(message: Message) {
		this.list.push(message);
		console.log('list', this.list);
		
  }
 
  clear() {
    this.list = [];
  }
} 