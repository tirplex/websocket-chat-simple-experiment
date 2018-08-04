import { Component } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [WebsocketService, ChatService]
})

export class AppComponent {

	constructor(private chatService: ChatService) {
		chatService.messages.subscribe(msg => {
			console.log("Response from websocket: ", msg);
		});
	}

}