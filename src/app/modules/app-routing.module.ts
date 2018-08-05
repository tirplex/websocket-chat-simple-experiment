import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from '../components/login/login.component';
import { NavigationComponent }   from '../components/navigation/navigation.component';
import { ChatlistComponent } from '../components/chatlist/chatlist.component';
import { PrivateChatComponent }   from '../components/private-chat/private-chat.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'chat',
    component: NavigationComponent,
    children: [
      { path: '', component: ChatlistComponent },
      { path: 'private/:id', component: PrivateChatComponent },
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
