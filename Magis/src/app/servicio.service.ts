import { Injectable } from '@angular/core';
import axios from 'axios';
import { Mascota } from './mascota';
import cors from 'cors';
//const cors = require('cors');

@Injectable({
  providedIn: 'root'
})

export class ServicioService {

  private url = 'http://localhost:3000/mascotas'
  constructor() { }

  async getData(): Promise<Array<Mascota>> {
    return (await axios.get(this.url)).data;
  }
}
