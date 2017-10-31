import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CompoundingProvider } from '../../providers/compounding/compounding';

@Component({
  selector: 'page-modal-compound',
  templateUrl: 'modal-compound.html',
})
export class ModalCompoundPage {
  resultados;
  porcentaje;
  inversion;
  compound;
  constructor(private view:ViewController,public navCtrl: NavController, public navParams: NavParams, public comp: CompoundingProvider) {
    this.resultados = this.comp.log;
    this.porcentaje = this.navParams.get('porcentaje');
    this.inversion = this.navParams.get('inversion');
    this.compound = this.navParams.get('compound');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCompoundPage');
  }

  cerrarModal(){
    this.view.dismiss();
 }
}
