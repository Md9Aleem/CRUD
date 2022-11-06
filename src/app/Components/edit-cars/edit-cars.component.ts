import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Cars } from 'src/app/models/cars.model';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-edit-cars',
  templateUrl: './edit-cars.component.html',
  styleUrls: ['./edit-cars.component.css']
})
export class EditCarsComponent implements OnInit {

  carDetails:Cars={
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

  constructor(private route:ActivatedRoute,private carService:CarsService,private router:Router,private toast:NgToastService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) =>{
        const id=params.get('id');

        if(id){
          this.carService.getCars(id)
          .subscribe({
            next:(response)=>{
              this.carDetails = response;
            }
          });
        }
      }
    })
  }

  updateCars(){
    this.carService.updateCars(this.carDetails.id,this.carDetails)
    .subscribe({
      next:(response) => {
        this.toast.success({detail:"Sucess Message",summary:"Updated Successfully",duration:5000})
        this.router.navigate(['cars'])
      }
    })
  }

  deleteCar(id:string){
    this.carService.deleteCar(id)
    .subscribe({
      next:(response) =>{
        this.toast.error({detail:"Sucess Message",summary:"Deleted Successfully",duration:5000})
        this.router.navigate(['cars'])
      }
    })
  }
}
