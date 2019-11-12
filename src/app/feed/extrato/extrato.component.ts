import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Movimentacao } from './movimentacao';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-extrato',
  templateUrl: 'extrato.component.html',
  styleUrls: ['extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Movimentacao>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

const ELEMENT_DATA: Movimentacao[] = [
  {
    data: '30/12/2018', 
    descricao: 'Saque', 
    valor: '550,00'
  },
  {
    data: '31/12/2018', 
    descricao: 'Saque', 
    valor: '750,00'
  }
];
