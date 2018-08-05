import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../models/message';

@Pipe({
  name: 'privateMessages'
})
export class PrivateMessagesPipe implements PipeTransform {

  transform(value: Message[], reciverId: number): Message[] {
    const messages = value;
    return messages.filter(m => m.type === 'private' && m.to === reciverId);
  }

}
