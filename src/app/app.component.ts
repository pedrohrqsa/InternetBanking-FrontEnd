import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'internetbanking';
  usuario: Object[] = [];
  
  constructor(http: HttpClient){
    console.log(http);

    http.get<Object[]>('http://localhost:5000/').subscribe(usuario => this.usuario = usuario);
  }
}
