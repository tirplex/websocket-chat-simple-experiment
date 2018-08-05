import { Component, OnDestroy } from '@angular/core';
import { WebsocketService } from './services/websocket.service';
import { ChatService } from './services/chat.service';
import { UserService } from './services/user.service';
import { User } from './models/user';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [WebsocketService, ChatService]
})

export class AppComponent implements OnDestroy {

  private user:User;


	constructor(
		private chatService: ChatService,
		private userService: UserService
	) {
    this.user = userService.getUser();

		chatService.messages.subscribe(msg => {
			console.log("Response from websocket: ", msg);

			if(msg['type'] == "login"){
				let message = {
					type: 'system',
					users: this.chatService.connectedUsers,
				}
				this.chatService.messages.next(message);
			}
		});
	}

	ngOnDestroy(){
		let message = {
			type: 'logout',
			user_id: this.user.id
		}
		this.chatService.messages.next(message);
		this.chatService.messages.unsubscribe();
	}

}