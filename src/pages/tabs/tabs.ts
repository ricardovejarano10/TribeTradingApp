import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistorialPage } from '../historial/historial';
import { OperativaPage } from '../operativa/operativa';
import { CompoundPage } from '../compound/compound';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  
  tab1 = HistorialPage;
  tab2 = OperativaPage;
  tab3 = CompoundPage;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
