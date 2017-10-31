import { Injectable } from '@angular/core';

@Injectable()
export class CompoundingProvider {

  log: number[] = [];  // Array que contiene los compuestos
  temp: any = 0;  //Resultados temporales del compuesto que se agregan a log
  x: number;
  inversion; // inversión con la que se inicia el copound
  porcentaje; // Porcentaje que paga el broker al momento de la operación
  compound;  // Numero de compuestos que va a hacer 

  constructor() { }

  calculo(p: number, inv: number, c: number) {
    //Se asignan los valores que vienen del controlador a las 
    //variables del servicio
    this.log = [];
    this.porcentaje = (p / 100) + 1;
    this.inversion = inv;
    this.compound = c;

    var total = 0;

    for (var i = 0; i < this.compound; i++) {

      if (i == 0) {
        this.x = parseInt(this.inversion);
      } else {
        this.x = this.temp;
      }
      this.temp = [];
      this.temp = this.porcentaje * this.x;
      this.temp = this.temp.toFixed(2);
      this.log.push(this.temp)
    }//cierra el for 
  } //cierra la función calculo
} //cierra la clase
