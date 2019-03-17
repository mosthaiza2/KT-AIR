import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomersProvider {
  data : any;
  constructor(public http: HttpClient) {
    //console.log('Hello CustomersProvider Provider');
    this.data = [
        {id : "1", name : "Krisana", tel : "0858494472", address : "94,m7,Phapathon,Nakhon Pathom"},
        {id : "2", name : "Tanatat", tel : "0909404504", address : "97,m5,Phapathon,Nakhon Pathom"},
        {id : "3", name : "Sompot", tel : "0878153453", address : "98,m7,Phapathon,Nakhon Pathom"}
    ];
  }
  loadAll(){
    return Promise.resolve(this.data);
  }

  getCustomerById(id){
    for(var i=0;i<(this.data).length;i++){
      if(this.data[i].id==id){
        return Promise.resolve(this.data[i])
      }
    }
  }
}
