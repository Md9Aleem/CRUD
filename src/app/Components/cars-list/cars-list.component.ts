import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/models/cars.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars:Cars[]=[];

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
    this.carService.getAllCars()
    .subscribe({
      next:(cars) =>{
        this.cars=cars;
      },
      error: (response)=> {
        console.log(response);
      }
    })
  }

}
