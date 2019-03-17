import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {LocationPage} from '../location/location';
import {SlidesPage} from '../slides/slides';
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
    this.navCtrl.setRoot(ContactPage);
  }
  gotolocation(){
    this.navCtrl.push(LocationPage);
  }
  gotoslides(){
    this.navCtrl.push(SlidesPage);
  }
}
