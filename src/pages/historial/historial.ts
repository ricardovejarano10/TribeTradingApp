import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
valores;
porcentaje;
inversion;
compound;
  constructor(public navCtrl: NavController, public storage: Storage,
    public navParams: NavParams) {
    this.storage.get('plan').then((val) => {
      this.valores = val;
      console.log('El plan es: ', val);
    });

    this.storage.get('porcentaje').then((val) => {
      this.porcentaje = val;
      console.log('El plan es: ', val);
    });

    this.storage.get('inversion').then((val) => {
      this.inversion = val;
      console.log('El plan es: ', val);
    });

    this.storage.get('compound').then((val) => {
      this.compound = val;
      console.log('El plan es: ', val);
    });

  }

  ionViewDidLoad() {

  }

}
