import { Injectable } from '@angular/core';

import { HttpClient  } from '@angular/common/http';

import { Vehicule } from './vehicule';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient ) { }

   listVehicule(): Observable<Vehicule[]>{
    return this.http.get<Vehicule[]>(`${this.baseUrl}/list-vehicule`);
  }
}
