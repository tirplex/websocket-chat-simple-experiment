import { Component } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';

class Message {
	author: string;
	message: string;
}


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [WebsocketService, ChatService]
})


export class AppComponent {

	userText: string = '';
	userName: string = 'User-' + Math.floor(Math.random() * 6) + 1;
	isUserLogin: boolean = false;

	constructor(private chatService: ChatService) {
		chatService.messages.subscribe(msg => {
			console.log("Response from websocket: " + msg);
		});
	}

	// private message = {
	// 	author: 'tutorialedge',
	// 	message: 'this is a test message'
	// }

	sendMsg(): void {
		if (this.userText) {
			let message = {
				author: this.userName,
				message: this.userText
			}
			console.log('new message from client to websocket: ', message);
			this.chatService.add(message);
			this.chatService.messages.next(message);
			this.userText = '';
			// this.message.message = '';

		}
	}

	login(){
		if (this.userName) {
			this.isUserLogin = true;
		}
	}



}