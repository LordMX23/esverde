import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CoordinadorResponse } from '../../interfaces/coordinador-response.interface';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';

@Component({
  selector: 'app-list-coordinadores-table',
  templateUrl: './list-coordinadores-table.component.html',
  styles: ``
})
export class ListCoordinadoresTableComponent implements OnChanges {
  
  displayedColumns: string[] = ['nombre', 'telefono', 'seccion', 'cZona', 'estructura'];
  dataSource: MatTableDataSource<CoordinadorResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){
    this.dataSource = new MatTableDataSource<CoordinadorResponse>(this.coordinadores);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<CoordinadorResponse>(this.coordinadores);
    this.dataSource.paginator = this.paginator;
  }

  @Input()
  coordinadores: GetEstructuraResponse[] =  [];

}