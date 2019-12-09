import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})

export class TransferenciaComponent {
  saldoAtual: number = 120.49;

  form: FormGroup = new FormGroup({
    saldo: new FormControl(''),
    valorTransf: new FormControl(''),
    contaTransf: new FormControl(''),
  });

   
     valor1 = this.form.get('valorTransf').value;
     conta1 = this.form.get('contaTransf').value;

    
  

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
    console.log (this.valor1, this.conta1);
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private _bottomSheet: MatBottomSheet) {}
  
}
