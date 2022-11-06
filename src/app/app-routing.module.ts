import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './Components/add-car/add-car.component';
import { CarsListComponent } from './Components/cars-list/cars-list.component';
import { EditCarsComponent } from './Components/edit-cars/edit-cars.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'cars',component:CarsListComponent},
  {path:'cars/add',component:AddCarComponent},
  {path:'cars/edit/:id',component:EditCarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
