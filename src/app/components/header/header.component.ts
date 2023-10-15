import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/City';
import { GeoApiService } from 'src/app/service/geo-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  city$: Observable<Array<City>>;
  showCitylist : boolean;

  constructor(private http: HttpClient, 
    private service: GeoApiService,
    private router:Router) {}

  ngOnInit(): void{
  }
  
  // Evènement sur la barre de recherche
  onKeyCity(event: any) {
    this.city$ = this.service.getCitiesByName(event.target.value);

    if (event.target.value) {
      this.showCitylist = true;
    }
    else {
      // Ne plus afficher la liste déroulante si il n'y a rien dans l'Input
      this.showCitylist = false;
    }
  }
  
  // Lors du clic sur la ville choisie mettre la donnée de la ville dans l'URL qui sera récupéré par le  
  onClickCity(city:City){
    this.showCitylist = false;
    this.router.navigate(['home'], {queryParams: {city: city.nom}})
  }
}
