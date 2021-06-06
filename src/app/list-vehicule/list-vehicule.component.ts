import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';

import { vehiculeService }  from '../vehicule.service';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListvehiculeComponent implements OnInit {

  vehicules!: Vehicule[];

  constructor(private vehiService: VehiculeService) { }

  ngOnInit(): void {

    this.vehiService.listVehicule().subscribe(
      data =>  {
        console.log(data);
        this.vehicules = data;
      }
      );
  }

}
