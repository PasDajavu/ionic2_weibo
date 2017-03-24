import { Component} from '@angular/core';
import {Http} from '@angular/http';
import { NavController,ModalController,FabContainer} from 'ionic-angular';
import { birthdayCard } from '../birthdayCard/birthdayCard';
import { addWeibo } from '../addWeibo/addWeibo';
import {Storage} from '@ionic/storage';

//分页
var page = {
	no:1, //当前第几页
	count:10, //每页多少条数据
}

@Component({
    selector: 'page-mainPage',
    templateUrl: 'mainPage.html',
})

export class mainPage {
	//微信列表
	private weixinList:Array<Object>;

	//微信凭证
	private access_token;
	
    constructor(public navCtrl: NavController,public modalCtrl:ModalController,public http:Http,public storage:Storage)
	{
		this.storage.get('access_token').then((val) => {
			this.access_token = val;
        })
    }
  	
  
  	/**
	 * @method 获取微信列表
	 */
	getWxList(){
		let self = this;
		//初始化分页信息
		page.no = 1;
		//获取微信列表
	  	self.http.get('https://api.weibo.com/2/statuses/home_timeline.json?access_token='+self.access_token+'&page='+page.no+'&count='+page.count).subscribe(function(wxListData:any){
	  		self.weixinList = JSON.parse(wxListData._body).statuses;
	  		console.log(self.weixinList)
	  	});
	}
	
	/**
	 * @method 加载更多微信
	 */
	loadWeixin(){
		let self = this;
		page.no++;
		//获取微信列表
	  	self.http.get('https://api.weibo.com/2/statuses/home_timeline.json?access_token='+self.access_token+'&page='+page.no+'&count='+page.count).subscribe(function(wxListData:any){
	  		self.weixinList = self.weixinList.concat(JSON.parse(wxListData._body).statuses);
	  		console.log(self.weixinList)
	  	});
	}
	
	addWeibo(fab:FabContainer){
		let addWeiboModal = this.modalCtrl.create(addWeibo);
		addWeiboModal.present();
		//关闭fab
		fab.close();
	}
	
	
}

