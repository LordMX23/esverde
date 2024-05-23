import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { CoordinadorSeccionResponse } from '../../interfaces/coordinador-response.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';

@Component({
  selector: 'app-list-coordinadores-seccion-table',
  templateUrl: './list-coordinadores-seccion-table.component.html',
  styles: ``
})
export class ListCoordinadoresSeccionTableComponent {

  displayedColumns: string[] = ['csNombre', 'csTelefono', 'csSeccion', 'promotor', 'estructura'];
  dataSource: MatTableDataSource<CoordinadorSeccionResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){
    this.dataSource = new MatTableDataSource<CoordinadorSeccionResponse>(this.coordinadoresSeccion);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<CoordinadorSeccionResponse>(this.coordinadoresSeccion);
    this.dataSource.paginator = this.paginator;
  }

  @Input()
  coordinadoresSeccion: GetEstructuraResponse[] =  [];

}
