import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  test$:Observable<string>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void{
    const url = "http://localhost:3000/api/accomodations";
    this.test$ = this.http.get<string>(url);
    // Permet d'afficher une trace de log sur la page web
    // this.http.get<string>(url).subscribe(url=>console.log(url));
  }
}
