import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//================ PAGINAS ==============================//
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistorialPage } from '../pages/historial/historial';
import { OperativaPage } from '../pages/operativa/operativa';
import { CompoundPage } from '../pages/compound/compound';
import { TabsPage } from '../pages/tabs/tabs';
import { CompoundingProvider } from '../providers/compounding/compounding';
import { ModalCompoundPage } from '../pages/modal-compound/modal-compound';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistorialPage,
    OperativaPage,
    CompoundPage,
    TabsPage,
    ModalCompoundPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistorialPage,
    OperativaPage,
    CompoundPage,
    TabsPage,
    ModalCompoundPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CompoundingProvider
  ]
})
export class AppModule {}
