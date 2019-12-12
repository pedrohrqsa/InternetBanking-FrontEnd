import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: 'extrato.component.html',
  styleUrls: ['extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private extratoService: ExtratoService) { }

  displayedColumns: string[] = ['dtTransacao', 'idTipoTransacao', 'valor'];

  dataSource = new MatTableDataSource<any>();

  ngOnInit() {
    this.extratoService.getInfoExtrato()
    .subscribe(stream => {
      this.dataSource = new MatTableDataSource(stream);
      this.dataSource.paginator = this.paginator;
    });
  }
}



