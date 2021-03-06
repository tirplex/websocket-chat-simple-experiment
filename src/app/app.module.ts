import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { ChatlistComponent } from './components/chatlist/chatlist.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateChatComponent } from './components/private-chat/private-chat.component';
import { PrivateMessagesPipe } from './pipes/private-messages.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChatlistComponent,
    NavigationComponent,
    LoginComponent,
    PrivateChatComponent,
    PrivateMessagesPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    // NoopAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
