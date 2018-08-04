import { Component, OnInit } from '@angular/core';

import { Message2 } from '../../models/message2';
import { MSGS } from '../../models/messages-mock'; 

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {

  messages = MSGS;

  constructor() { }

  ngOnInit() {
  }

}
