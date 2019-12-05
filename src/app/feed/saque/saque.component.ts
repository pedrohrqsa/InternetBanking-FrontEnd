import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { Transacao } from 'src/app/Models/Transacao';
import { SaqueService } from './saque.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})

export class SaqueComponent {
  

  
  saldoAtual: number = 120;

  form: FormGroup = new FormGroup({
    saldo: new FormControl(''),
    valorSaque: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private _bottomSheet: MatBottomSheet,private servico: SaqueService,private router: Router,private http: HttpClient) {}
  
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
  onSaque() {
    const saque = this.form.getRawValue() as Transacao;

    this.servico
      .Saque(saque)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
    }

  
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  form: FormGroup;
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,private servico: SaqueService,private router: Router,private http: HttpClient){}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
onSaque() {
    const saque = this.form.getRawValue() as Transacao;

    this.servico
      .Saque(saque)
      .subscribe(
        () => this.router.navigate(['']),
        err => console.log(err)
      );
    }
  
}

