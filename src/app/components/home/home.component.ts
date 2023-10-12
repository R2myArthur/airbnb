import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/City';
import { Logement } from 'src/app/models/Logement';
import { GeoApiService } from 'src/app/service/geo-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  cardItems$: Observable<Array<Logement>>;
  cardItemsOrig: Array<Logement>; // Les données appartements reçu du web
  cardItemsFilter: Array<Logement>; // Données filtrée avec la bar de recherche
  city$: Observable<Array<City>>;

  constructor(private http: HttpClient, private service:GeoApiService) {}

  ngOnInit(): void{
    const url = "http://localhost:3000/api/accomodations"
    this.http.get<Array<Logement>>(url).subscribe(logements=>{
      this.cardItemsOrig=logements;
      this.cardItemsFilter = logements;
    });
  }

  // Evènement sur la barre de recherche
  onKey(event: any) {
    console.log(event.target.value);
    this.city$ = this.service.getCitiesByName(event.target.value);
    this.city$.subscribe(city=>console.log(city))
    if (event.target.value == ""){
      this.cardItemsFilter = this.cardItemsOrig
    }
  }

  // Lors de la sélection 
  onClickCity(city:City){
    console.log("click city");
    this.cardItemsFilter = this.cardItemsOrig.filter(cardItem=>{
      return cardItem.city.name.includes(city.nom)
    })
    console.log(this.cardItemsFilter)
  }
}
