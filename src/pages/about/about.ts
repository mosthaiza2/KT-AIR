import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomersProvider} from '../../providers/customers/customers';
import {CustomerdetailPage} from '../customerdetail/customerdetail';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  allCusts : any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: CustomersProvider ) {
    this.data.loadAll().then(result=>{ this.allCusts = result });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  
  showCustomer(custid){
    this.navCtrl.push(CustomerdetailPage,{id:custid})
  }

}
