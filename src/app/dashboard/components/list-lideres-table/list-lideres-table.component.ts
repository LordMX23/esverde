import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { LiderResponse } from '../../interfaces/lider-response.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-lideres-table',
  templateUrl: './list-lideres-table.component.html',
  styles: ``
})
export class ListLideresTableComponent implements OnChanges {

  @Input()
  lideres: LiderResponse[] =  [];
  
  displayedColumns: string[] = ['nombre', 'telefono', 'seccion', 'editar', 'votantes', 'estructura'];
  dataSource: MatTableDataSource<LiderResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){
    this.dataSource = new MatTableDataSource<LiderResponse>(this.lideres);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<LiderResponse>(this.lideres);
    this.dataSource.paginator = this.paginator;
  }

}