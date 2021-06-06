import { Component, OnInit } from '@angular/core';
import { Conducteur } from '../conducteur';

import { ConducteurService }  from '../conducteur.service';

@Component({
  selector: 'app-list-conducteur',
  templateUrl: './list-conducteur.component.html',
  styleUrls: ['./list-conducteur.component.css']
})
export class ListConducteurComponent implements OnInit {

  conducteurs!: Conducteur[];

  constructor(private condService: ConducteurService) { }

  ngOnInit(): void {

    this.condService.listConducteur().subscribe(
      data =>  {
        console.log(data);
        this.conducteurs = data;
      }
      );
  }

}
