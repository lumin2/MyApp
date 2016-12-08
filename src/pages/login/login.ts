import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainUIPage } from '../mainui/mainui';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
  
})
export class LoginPage {
   
  constructor(public navCtrl: NavController) {

  }
   checkLogin() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in

    this.navCtrl.push(MainUIPage);
  }

}
