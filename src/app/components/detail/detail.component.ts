import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logement } from 'src/app/models/Logement';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {}

  accomodation: Logement;

  ngOnInit(): void{
    // Récupérer depuis le back les données sur le serveur avec l'url '/detail/#ID'
    this.http.get<Array<Logement>>("http://localhost:3000" + this.router.url).subscribe(logements=>{  
      // Conserver le premier élément du tableau retourné (il n'y a qu'un seul élément de retourné)
      this.accomodation = logements[0];
    });
  }    
}
