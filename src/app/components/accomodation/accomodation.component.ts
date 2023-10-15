import { Component, Input, OnInit } from '@angular/core';
import { Logement } from 'src/app/models/Logement';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent {
  
  @Input() accomodation: Logement;

  constructor() {}
}
