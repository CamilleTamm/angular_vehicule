import { Injectable } from '@angular/core';

import { HttpClient  } from '@angular/common/http';

import { Conducteur } from './conducteur';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConducteurService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient ) { }

   listConducteur(): Observable<Conducteur[]>{
    return this.http.get<Conducteur[]>(`${this.baseUrl}/list-conducteur`);
  }
}
