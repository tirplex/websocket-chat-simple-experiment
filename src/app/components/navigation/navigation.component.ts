import { Component, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute} from '@angular/router';


import { User } from '../../models/user';
import { ChatService } from '../../services/chat.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnChanges, AfterContentInit {

  private user:User;
  private userText: string = '';
  private reciverId: number;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private chatService: ChatService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.user = userService.getUser();
    chatService.messages.subscribe(msg => {
      console.log("Response from websocket: ", msg);
    });
  }

  ngOnInit(){
    this.userService.checkAuth();
    // this.reciverId = +this.route.snapshot.paramMap.get('id');
    // console.log('asdasdasd===============>> ',this.reciverId);
    
  }

  ngAfterContentInit() {
    // console.log('asdasdasd===============>> ',this.reciverId);

  }

  ngOnChanges(){
    this.userService.checkAuth();
    // console.log('asdasdasd===============>> ',this.reciverId);

  }


  sendMessage(): void {

    let reciverId = +this.route.snapshot.paramMap.get('id');
    let type = 'broadcast';
    if (this.reciverId) type = 'private'; 
    console.log('asdasdasd===============>> ', reciverId);
    

    if (this.userText) {
      let message = {
        id: this.user.id,
        type: type,
        to: reciverId,
        author: this.user.name,
        message: this.userText
      }
      console.log('new message from client to websocket: ', message);
      this.chatService.add(message);
      this.chatService.messages.next(message);
      this.userText = '';
      // this.message.message = '';

    }
  }

  

}
