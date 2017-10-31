import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CompoundingProvider } from '../../providers/compounding/compounding';

@Component({
  selector: 'page-modal-compound',
  templateUrl: 'modal-compound.html',
})
export class ModalCompoundPage {
  resultados;
  constructor(private view:ViewController,public navCtrl: NavController, public navParams: NavParams, public comp: CompoundingProvider) {
    this.resultados = this.comp.log;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCompoundPage');
  }

  cerrarModal(){
    this.view.dismiss();
 }
}
