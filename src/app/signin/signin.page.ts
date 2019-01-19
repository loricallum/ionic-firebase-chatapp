import { Component, OnInit } from '@angular/core';
import { RoomPage } from  'src/app/room/room.page';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  data = { nickname:"" };
  navCtrl: any;
  enterNickname() {
    this.navCtrl.setRoot(RoomPage, {
      nickname: this.data.nickname
    });
  }
  

  constructor() { }

  ngOnInit() {
  }

}
