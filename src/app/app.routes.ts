import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HouseComponent } from './house/house.component';

export const routes: Routes = [
    {
        "path":"home",
        "component":HomeComponent
    },
    {
        "path":"house",
        "component":HouseComponent
    }
];

