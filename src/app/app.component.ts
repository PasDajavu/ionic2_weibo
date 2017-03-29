import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { mainPage } from '../pages/mainPage/mainPage';
import { Page2 } from '../pages/page2/page2';
import { GlobalData } from '../global/globalData';
import { Storage } from '@ionic/storage';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
private user: any[] = [];

  rootPage: any = mainPage;

  constructor(public platform: Platform, public _globalData: GlobalData, public storage: Storage) {
    this._globalData.access_tokenInStorage();
    this.storage.get('access_token').then((access_token) => {
      this._globalData.userInStorage(access_token);
      this.storage.get('user').then((user) => {
        this.user = user;
        console.log(this.user)
      })
    })

    // this.user = {"id":5096654787,"idstr":"5096654787","class":1,"screen_name":"PasDajavu","name":"PasDajavu","province":"32","city":"4","location":"江苏 常州","description":"无欲无求。","url":"","profile_image_url":"http://tva2.sinaimg.cn/crop.45.47.139.139.50/005yV2Jtgw1ei9q0qpayij305k05kaad.jpg","cover_image_phone":"http://ww1.sinaimg.cn/crop.0.0.640.640.640/549d0121tw1egm1kjly3jj20hs0hsq4f.jpg","profile_url":"u/5096654787","domain":"","weihao":"","gender":"m","followers_count":806,"friends_count":102,"pagefriends_count":0,"statuses_count":1223,"favourites_count":5,"created_at":"Wed Apr 02 21:38:32 +0800 2014","following":false,"allow_all_act_msg":false,"geo_enabled":true,"verified":false,"verified_type":-1,"remark":"","insecurity":{"sexual_content":false},"status":{"created_at":"Thu Dec 08 12:00:33 +0800 2016","id":4050381362830153,"mid":"4050381362830153","idstr":"4050381362830153","text":"@A_aim","source_allowclick":0,"source_type":1,"source":"<a href=\"http://app.weibo.com/t/feed/6vtZb0\" rel=\"nofollow\">微博 weibo.com</a>","favorited":false,"truncated":false,"in_reply_to_status_id":"","in_reply_to_user_id":"","in_reply_to_screen_name":"","pic_urls":[],"geo":null,"reposts_count":0,"comments_count":0,"attitudes_count":0,"isLongText":false,"mlevel":0,"visible":{"type":0,"list_id":0},"biz_feature":0,"hasActionTypeCard":0,"darwin_tags":[],"hot_weibo_tags":[],"text_tag_tips":[],"userType":0,"positive_recom_flag":0,"gif_ids":"","is_show_bulletin":2},"ptype":0,"allow_all_comment":true,"avatar_large":"http://tva2.sinaimg.cn/crop.45.47.139.139.180/005yV2Jtgw1ei9q0qpayij305k05kaad.jpg","avatar_hd":"http://tva2.sinaimg.cn/crop.45.47.139.139.1024/005yV2Jtgw1ei9q0qpayij305k05kaad.jpg","verified_reason":"","verified_trade":"","verified_reason_url":"","verified_source":"","verified_source_url":"","follow_me":false,"online_status":0,"bi_followers_count":32,"lang":"zh-cn","star":0,"mbtype":0,"mbrank":0,"block_word":0,"block_app":0,"credit_score":80,"user_ability":1024,"urank":24}

    // console.log(this.user)
  }




}
