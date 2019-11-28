import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  isShown: boolean = false;

  toggleShow() {
    this.isShown = !this.isShown;
  }

  public recebeCpf(RespFilho) {
   console.log("A resposta é: ", RespFilho);
   }
}
