import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CompoundingProvider } from '../../providers/compounding/compounding';
import { Storage } from '@ionic/storage';
import { HistorialPage } from '../historial/historial';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-modal-compound',
  templateUrl: 'modal-compound.html',
})
export class ModalCompoundPage {
  resultados;
  porcentaje;
  inversion;
  compound;
  limpiar: any = [];
  constructor(private view: ViewController, public storage: Storage,
    public navCtrl: NavController, public navParams: NavParams, public comp: CompoundingProvider) {
    this.resultados = this.comp.log;
    this.porcentaje = this.navParams.get('porcentaje');
    this.inversion = this.navParams.get('inversion');
    this.compound = this.navParams.get('compound');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalCompoundPage');
  }

  cerrarModal() {
    this.view.dismiss();
  }
  agregarPlan() {
    
    this.storage.set("plan", this.limpiar);
    this.storage.set("porcentaje", this.limpiar);
    this.storage.set("inversion", this.limpiar);
    this.storage.set("compound", this.limpiar);


    this.storage.set("porcentaje", this.porcentaje);
    this.storage.set("inversion", this.inversion);
    this.storage.set("compound", this.compound);
    this.storage.set("plan", this.resultados);
    this.view.dismiss();
    this.navCtrl.setRoot(TabsPage);
  }
}
