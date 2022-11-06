import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './Components/cars-list/cars-list.component';
import { HomeComponent } from './Components/home/home.component';
import { AddCarComponent } from './Components/add-car/add-car.component';
import { FormsModule } from '@angular/forms';
import { EditCarsComponent } from './Components/edit-cars/edit-cars.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    HomeComponent,
    AddCarComponent,
    EditCarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
