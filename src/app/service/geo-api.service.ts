import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/City';

@Injectable({
  providedIn: 'root'
})

/* Service de récupération depuis l'application gouvernementale des commune de france */
export class GeoApiService {

  constructor(private http:HttpClient) { }

  /* Récupérer les villes commencant par le paramètre d'entrée, en utilisant l'objet http défini dans le constructeur du composant

    return : Renvoie un tableau de ville au format défini dans les modèles
  */
  getCitiesByName(city:string){
    return this.http.get<Array<City>>("https://geo.api.gouv.fr/communes?nom="+city)
  }
}
