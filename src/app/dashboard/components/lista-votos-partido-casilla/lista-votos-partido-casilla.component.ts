import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { GetPartidoVotosSeccionResponse } from '../../interfaces/get-partido-votos-seccion-response.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-votos-partido-casilla',
  templateUrl: './lista-votos-partido-casilla.component.html',
  styles: ``
})
export class ListaVotosPartidoCasillaComponent {

  @Input()
  PartidoVotosSeccion: GetPartidoVotosSeccionResponse[] =  [];

  displayedColumns: string[] = ['cve_seccion', 'cve_casilla', 'novoto'];
  dataSource: MatTableDataSource<GetPartidoVotosSeccionResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){
    this.dataSource = new MatTableDataSource<GetPartidoVotosSeccionResponse>(this.PartidoVotosSeccion);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<GetPartidoVotosSeccionResponse>(this.PartidoVotosSeccion);
    this.dataSource.paginator = this.paginator;
  }

}
