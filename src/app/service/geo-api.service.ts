import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../models/City';

@Injectable({
  providedIn: 'root'
})
export class GeoApiService {
  url = 'https://geo.api.gouv.fr/communes?nom=Nantes'


  constructor(private http:HttpClient) { }

  getCitiesByName(city:string){
    return this.http.get<Array<City>>("https://geo.api.gouv.fr/communes?nom="+city)
  }
}
