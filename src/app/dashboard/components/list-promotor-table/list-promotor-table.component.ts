import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CoordinadorResponse, PromotorResponse } from '../../interfaces/coordinador-response.interface';
import { MatPaginator } from '@angular/material/paginator';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';

@Component({
  selector: 'app-list-promotor-table',
  templateUrl: './list-promotor-table.component.html',
  styles: ``
})
export class ListPromotorTableComponent {

  displayedColumns: string[] = ['pNombre', 'pTelefono', 'pSeccion', 'votante', 'estructura'];
  dataSource: MatTableDataSource<PromotorResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(){
    this.dataSource = new MatTableDataSource<PromotorResponse>(this.promotores);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<PromotorResponse>(this.promotores);
    this.dataSource.paginator = this.paginator;
  }

  @Input()
  promotores: GetEstructuraResponse[] =  [];

}
