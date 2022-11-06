import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Cars } from 'src/app/models/cars.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  addCarsRequest:Cars = {
    id:'',
    make:'',
    model:'',
    year:'',
    color:'',
    stateOfRegistration:'',
    licensePlate:'',
    locationOfVehicle:'',
    insurance:true
  }

  constructor(private carService:CarsService,private router:Router,private toast:NgToastService) { }

  ngOnInit(): void {
  }

  addCars(){
    this.carService.addCars(this.addCarsRequest)
    .subscribe({
      next:(cars) => {
        this.toast.success({detail:"Sucess Message",summary:"Added Successfully",duration:5000})
        this.router.navigate(['cars']);
      }
    });
  }

}
