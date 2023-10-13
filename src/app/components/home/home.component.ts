import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  cardItemsFilter: Array<Logement>; // Données filtrée avec la bar de recherche
  city$: Observable<Array<City>>;

  constructor(private http: HttpClient, 
    private service:GeoApiService,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void{
    const url = "http://localhost:3000/api/accomodations"
    this.http.get<Array<Logement>>(url).subscribe(logements=>{
      this.route.queryParams.subscribe((params)=> {
        const city = params['city']
        if (city){
          this.cardItemsFilter = logements.filter((logement) => {
            return logement.city.name == city
          })
        } else {
          this.cardItemsFilter = logements
        }
      })
    });
  }
}
