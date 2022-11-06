import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Cars } from '../models/cars.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  baseUrl:string=environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllCars():Observable<Cars[]> {
    return this.http.get<Cars[]>(this.baseUrl+'/api/Cars');
  }

  addCars(addCarsRequest:Cars):Observable<Cars>{
    addCarsRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Cars>(this.baseUrl+'/api/Cars',addCarsRequest)
  }

  getCars(id:string){
    return this.http.get<Cars>(this.baseUrl + '/api/Cars/' + id);
  }

  updateCars(id:string,updateCarsRequest:Cars):Observable<Cars>{
    return this.http.put<Cars>(this.baseUrl + '/api/Cars/' + id,updateCarsRequest);
  }

  deleteCar(id:string):Observable<Cars> {
    return this.http.delete<Cars>(this.baseUrl + '/api/Cars/' + id);
  }
}
