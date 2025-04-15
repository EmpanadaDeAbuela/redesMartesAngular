import { Component } from '@angular/core';
import axios from 'axios';
import { Mascota } from '../mascota';
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
  mascotasArray:Array<Mascota> = []

  sumar(){
    this.numero+= this.adicion;
  }

  cambiarAdicion(){
    this.adicion*=2;
  }

  getear(){
    this.servicio.getData().then(data => {
      this.mascotasArray = data;
      console.log(this.mascotasArray);
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
