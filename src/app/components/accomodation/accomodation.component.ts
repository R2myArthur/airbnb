import { Component, Input, OnInit } from '@angular/core';
import { Logement } from 'src/app/models/Logement';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.scss']
})
export class AccomodationComponent implements OnInit {
  
  @Input() accomodation: Logement;

  imageWithPrefix: string;
  backgroundSize: string;

  ngOnInit(): void{
    const url = "http://localhost:3000/api/accomodations"
    this.imageWithPrefix = 'data:image/jpeg;base64,' + this.accomodation.image;
    this.backgroundSize = 'cover';
  }
}
