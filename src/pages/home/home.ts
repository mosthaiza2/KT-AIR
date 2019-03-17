import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {LocationPage} from '../location/location';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoabout(){
    this.navCtrl.push(AboutPage);
  }
  gotocontact(){
    this.navCtrl.push(ContactPage);
  }
  gotolocation(){
    this.navCtrl.push(LocationPage);
  }
}
