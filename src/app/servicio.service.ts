import { Injectable } from '@angular/core';
import axios from 'axios';
import { Vehiculo } from './vehiculo';
import cors from 'cors';
//const cors = require('cors');

@Injectable({
  providedIn: 'root'
})

export class ServicioService {

  private url = 'http://localhost:3000/vehiculos'
  constructor() { }

  async getData(): Promise<Array<Vehiculo>> {
    return (await axios.get(this.url)).data;
  }

  getData1(): Promise<Array<Vehiculo>> { //busca de la api
    return new Promise<Array<Vehiculo>>((resolve,reject)=>{
      axios.get(this.url).then(v=>{
        resolve(v.data);
      })
    });
}
  
}
