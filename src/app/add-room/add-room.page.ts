import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import * as firebase from 'Firebase';
@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.page.html',
  styleUrls: ['./add-room.page.scss'],
})
export class AddRoomPage implements OnInit {
  data = { roomname:'' };
  ref = firebase.database().ref('chatrooms/');
  navCtrl: any;
  addRoom() {
    let newData = this.ref.push();
    newData.set({
      roomname:this.data.roomname
    });
    this.navCtrl.pop();
  }
  constructor() { }

  ngOnInit() {
  }

}
