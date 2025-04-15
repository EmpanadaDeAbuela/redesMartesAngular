import { Component } from '@angular/core';
import axios from 'axios';
import { Vehiculo } from '../vehiculo';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private servicio:ServicioService){

  }
  adicion:number = 1
  numero:number = 0
  vehiculosArray:Array<Vehiculo> = []

  sumar(){
    this.numero+= this.adicion;
  }

  cambiarAdicion(){
    this.adicion*=2;
  }

  getear(){
    this.servicio.getData().then(data => {
      this.vehiculosArray = data;
      console.log(this.vehiculosArray);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  delete(){

  }

  update(){

  }

  sendear(){
    
  }

}
