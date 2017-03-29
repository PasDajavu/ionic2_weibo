import {Component} from '@angular/core';
import {NavController,ViewController} from "ionic-angular";
import { Http } from '@angular/http';
import {Storage} from '@ionic/storage';

@Component({
	templateUrl: 'addWeibo.html'
})

export class addWeibo {

	//微信凭证
	private access_token;
	
	constructor (public navCtrl:NavController,public viewCtrl:ViewController,public http:Http,public storage:Storage){
		this.storage.get('access_token').then((val)=>{
			this.access_token = val;
		})
	}
	
	closeModal(){
		this.viewCtrl.dismiss();
	}

	//新增一条微博
	addWeibo(){
		let self = this;
		self.http.post('https://api.weibo.com/2/statuses/update.json',{access_token:self.access_token,status:'gupeishigehaoren'}).subscribe(function(res:any){
            console.log(res)
        })
		
	}
	
}
