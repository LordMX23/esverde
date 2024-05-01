import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { VotanteResponse } from '../../interfaces/votante-response.interface';


@Component({
  selector: 'app-list-votantes-table',
  templateUrl: './list-votantes-table.component.html',
  styles: ``
})
export class ListVotantesTableComponent implements OnChanges {
  
  displayedColumns: string[] = ['nombre', 'telefono', 'seccion', 'domicilio', 'editar'];
  dataSource: MatTableDataSource<VotanteResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){
    this.dataSource = new MatTableDataSource<VotanteResponse>(this.votantes);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<VotanteResponse>(this.votantes);
    this.dataSource.paginator = this.paginator;
  }

  @Input()
  votantes: VotanteResponse[] =  [];

}