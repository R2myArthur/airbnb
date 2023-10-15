import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/City';
import { Logement } from 'src/app/models/Logement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardItemsFilter: Array<Logement>; // Données filtrée avec la bar de recherche

  constructor(private http: HttpClient,
    private route: ActivatedRoute) {
    }

  ngOnInit(): void{
    // Adresse du backend permettant d'accéder à l'ensemble de la base de donnée
    const url = "http://localhost:3000/api/accomodations"

    // Récupérer les logements récupérés dans la base de donéne du backend
    this.http.get<Array<Logement>>(url).subscribe(logements=>{
      // Utilisation des paramètres transmis par l'adresse URL
      this.route.queryParams.subscribe((params)=> {
        const city = params['city']
        if (city){
          // Filtrer sur le paramètre 'city' pour récupérer seulement les logements qui continnent la ville selectionnée
          this.cardItemsFilter = logements.filter((logement) => {
            return logement.city.name == city
          })
        } else {
          // Si aucune ville selectionnée on veut afficher tous les logements
          this.cardItemsFilter = logements
        }
      })
    });
  } 
}
