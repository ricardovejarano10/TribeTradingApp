import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { CompoundingProvider } from '../../providers/compounding/compounding';
import { HistorialPage } from '../historial/historial';
import { ModalCompoundPage } from '../modal-compound/modal-compound';

@Component({
  selector: 'page-compound',
  templateUrl: 'compound.html',
})
export class CompoundPage {

  compounds: any;
  res:any;
  resultados;
  constructor(public navCtrl: NavController, private modal:ModalController,
    public navParams: NavParams, public comp: CompoundingProvider) {
    this.resultados = this.comp.log;
    console.log(this.resultados);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompoundPage');
  }

  calcularCompound(p:number, i:number, c:number) {
    this.resultados = [];
    this.comp.calculo(p,i,c);
    const myModal = this.modal.create(ModalCompoundPage, { porcentaje: p, inversion:i, compound:c });
    myModal.present();
  }
}
