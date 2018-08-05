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
  }

  ngOnInit(){
    this.userService.checkAuth();
  }

  ngAfterContentInit() {
  }

  ngOnChanges(){
    this.userService.checkAuth();
  }

  sendMessage(): void {
    
    // check what type message we send
    let reciverId = +this.route.firstChild.snapshot.params.id;
    let type = 'broadcast';
    if (this.reciverId != NaN) type = 'private'; 
    

    if (this.userText) {
      let message = {
        id: this.user.id,
        type: type,
        to: reciverId,
        date: new Date(),
        author: this.user.name,
        message: this.userText
      }
      console.log('NAVIGATION new message from client to websocket: ', message);
      this.chatService.add(message);
      this.chatService.messages.next(message);
      this.userText = '';
    }
  }

  

}
