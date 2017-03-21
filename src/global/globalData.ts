import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
declare var YCWeibo: any;

//debug模式
var isDebug = true;

//web模式下，微博应用配置
var weiboConfig = {
  appKey: '3729805958',
  appSecret: '73b2c3b2bc2cac44491d906bca33ae65',
  backHttp: 'https://api.weibo.com/oauth2/default.html',
}

@Injectable()
export class GlobalData{
    constructor(public http: Http,public storage:Storage) {}

    /**
     * @method 把access_token放入storage中
     */
    access_tokenInStorage(){
        let self = this;
        //获取access_token
        if (isDebug) {
            self.http.get('https://api.weibo.com/oauth2/authorize?client_id=' + weiboConfig.appKey + '&response_type=code&redirect_uri=' + weiboConfig.backHttp + '').subscribe(function (res: any) {
                let tempCode = res.url.split('code=')[1];
                self.http.post('https://api.weibo.com/oauth2/access_token?client_id=' + weiboConfig.appKey + '&client_secret=' + weiboConfig.appSecret + '&grant_type=authorization_code&redirect_uri=' + weiboConfig.backHttp + '&code=' + tempCode + '', {}).subscribe(function (acc: any) {
                self.storage.set('access_token',JSON.parse(acc._body).access_token);
                console.log(JSON.parse(acc._body).access_token)
                });
            });
        } else {
            YCWeibo.ssoLogin(function (args) {
                self.storage.set('access_token',args.access_token)
                console.log(args.access_token)
            }, function (failReason) {
                console.log(failReason);
            });
        }
    }

    /**
     * @method 把用户信息放入storage中
     */
    userInStorage(access_token){
        let self = this;
        self.http.get('https://api.weibo.com/2/users/show.json?access_token='+access_token+'&screen_name=PasDajavu').subscribe(function(res:any){
            self.storage.set('user',JSON.parse(res._body));
        })
    }


}