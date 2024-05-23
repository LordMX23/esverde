import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CoordinadorZonaResponse } from '../../interfaces/coordinador-response.interface';
import { MatPaginator } from '@angular/material/paginator';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';

@Component({
  selector: 'app-list-coordinadores-zona-table',
  templateUrl: './list-coordinadores-zona-table.component.html',
  styles: ``
})
export class ListCoordinadoresZonaTableComponent {

  displayedColumns: string[] = ['czNombre', 'czTelefono', 'czSeccion', 'cSeccion', 'estructura'];
  dataSource: MatTableDataSource<CoordinadorZonaResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){
    this.dataSource = new MatTableDataSource<CoordinadorZonaResponse>(this.coordinadoresZona);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<CoordinadorZonaResponse>(this.coordinadoresZona);
    this.dataSource.paginator = this.paginator;
  }

  @Input()
  coordinadoresZona: GetEstructuraResponse[] =  [];

}
