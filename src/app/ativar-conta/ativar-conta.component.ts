import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ativar-conta',
  templateUrl: './ativar-conta.component.html',
  styleUrls: ['./ativar-conta.component.css']
})
export class AtivarContaComponent implements OnInit {

  ativar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onAtivar(){
    if(this.ativar == false){
      this.ativar = true;
    } else {
      this.ativar = false;
    }
  }

}