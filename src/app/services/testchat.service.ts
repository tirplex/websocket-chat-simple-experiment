import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Message2 } from '../models/message2';
import { MSGS } from '../models/messages-mock'; 

@Injectable({
  providedIn: 'root'
})
export class TestchatService {

  constructor() { }

  getHeroes(): Observable<Message2[]> {
    return of(MSGS);
  }
}
