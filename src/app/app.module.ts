import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as MyApp from './app.component';
import { HomePage } from 'src/app/home/home.page';
import { SigninPage } from 'src/app/signin/signin.page';
import { RoomPage } from 'src/app/room/room.page';
import { AddRoomPage } from 'src/app/add-room/add-room.page';
import { SigninPageModule } from './signin/signin.module';

@NgModule({
  declarations: [
    AppModule,
    HomePage,
    SigninPage,
    RoomPage,
    AddRoomPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  bootstrap: [],
  entryComponents: [
    AppModule,
    HomePage,
    SigninPage,
    RoomPage,
    AddRoomPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   
  ]
})
export class AppModule {}

function newFunction() {
  return MyApp;
}
