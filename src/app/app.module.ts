import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { mainPage } from '../pages/mainPage/mainPage';
import { birthdayCard } from '../pages/birthdayCard/birthdayCard';
import { Page2 } from '../pages/page2/page2';
import { addWeibo } from '../pages/addWeibo/addWeibo';
import {Storage} from "@ionic/storage";
import {GlobalData} from '../global/globalData'

@NgModule({
  declarations: [
    MyApp,
    mainPage,
    Page2,
    birthdayCard,
    addWeibo,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    mainPage,
    Page2,
    birthdayCard,
    addWeibo,
  ],
  providers: [Storage,GlobalData,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
	
	
}
