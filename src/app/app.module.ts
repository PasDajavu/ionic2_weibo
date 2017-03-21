import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { mainPage } from '../pages/mainPage/mainPage';
import { birthdayCard } from '../pages/birthdayCard/birthdayCard';
import { Page2 } from '../pages/page2/page2';
import { addCard } from '../pages/mainPage/addCard';
import {Storage} from "@ionic/storage";
import {GlobalData} from '../global/globalData'

@NgModule({
  declarations: [
    MyApp,
    mainPage,
    Page2,
    birthdayCard,
    addCard,
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
    addCard,
  ],
  providers: [Storage,GlobalData,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
	
	
}
