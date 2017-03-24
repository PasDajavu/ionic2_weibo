import {Component} from '@angular/core';

import {NavController,ViewController} from "ionic-angular";

@Component({
	templateUrl: 'addWeibo.html'
})

export class addWeibo {
	
	constructor (public navCtrl:NavController,public viewCtrl:ViewController){
	}
	
	closeModal(){
		this.viewCtrl.dismiss();
	}
	
}
