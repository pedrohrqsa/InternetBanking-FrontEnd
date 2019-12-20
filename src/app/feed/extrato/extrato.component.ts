import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ExtratoService } from './extrato.service';
import { ActivatedRoute } from '@angular/router';
import { InfoContaService } from '../infos-conta/Infos-conta.service';

@Component({
  selector: 'app-extrato',
  templateUrl: 'extrato.component.html',
  styleUrls: ['extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private extratoService: ExtratoService,
    private activatedRoute: ActivatedRoute,
    private infoContaService: InfoContaService
    ) { }

  displayedColumns: string[] = ['dtTransacao', 'idTipoTransacao', 'valor'];

  dataSource = new MatTableDataSource<any>();

  getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

  numeroConta: number;
  indexCPF: number;
  nome: string;

  ngOnInit() {
    this.getIndexCPF();
    // this.onInfoCliente();
    this.onInfoConta();

    console.log(this.getCpf);
    console.log(this.numeroConta);

    this.extrato();
  }

  getIndexCPF() {
    const getCpf = this.activatedRoute.snapshot.paramMap.get('cpf');

    return this.extratoService.getInfoCliente()
      .subscribe(clientex =>
        console.log(getCpf,
          this.indexCPF = clientex.findIndex(obj =>
            obj.cpf == getCpf),
            this.onInfoConta())
      );
  }

  extrato(){
    this.extratoService.getInfoExtrato(this.getCpf)
    .subscribe(stream => {
      this.dataSource = new MatTableDataSource(stream);
      this.dataSource.paginator = this.paginator;
    });
  }

  // onInfoCliente() {
  //   return this.infoContaService.getInfoCliente()
  //     .subscribe(clientex =>
  //       this.nome = clientex[this.indexCPF].nome
  //     );
  // }


  onInfoConta() {
    return this.infoContaService.getInfoConta()
      .subscribe(clientex =>
        this.numeroConta = clientex[this.indexCPF].numeroConta
      );
  }

  refresh() {
    this.extrato();
  }
}



