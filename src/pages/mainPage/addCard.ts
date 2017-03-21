import {Component} from '@angular/core';

import {NavController,ViewController} from "ionic-angular";

@Component({
	templateUrl: 'addCard.html'
})

export class addCard {
	
	constructor (public navCtrl:NavController,public viewCtrl:ViewController){
	}
	
	closeModal(){
		this.viewCtrl.dismiss();
	}
	
}
