import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Logement } from 'src/app/models/Logement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  // @input Accomodation: Accomodation
  cardItems$: Observable<Array<Logement>>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void{
    const url = "http://localhost:3000/api/accomodations"
    this.cardItems$  = this.http.get<Array<Logement>>(url);
  }
}
