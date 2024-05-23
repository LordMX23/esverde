import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { VotanteResponse } from '../../interfaces/votante-response.interface';
import { PromovidoResponse } from '../../interfaces/coordinador-response.interface';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';


@Component({
  selector: 'app-list-votantes-table',
  templateUrl: './list-votantes-table.component.html',
  styles: ``
})
export class ListVotantesTableComponent implements OnChanges {
  
  displayedColumns: string[] = ['vNombre', 'vApellidos', 'vTelefono', 'vSeccion', 'vTraslado','vVoto', 'editar'];
  dataSource: MatTableDataSource<PromovidoResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){
    this.dataSource = new MatTableDataSource<PromovidoResponse>(this.votantes);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<PromovidoResponse>(this.votantes);
    this.dataSource.paginator = this.paginator;
  }

  @Input()
  votantes: GetEstructuraResponse[] =  [];

}