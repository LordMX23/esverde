import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';
import { ListaEstructura } from '../../interfaces/listEstructura.interface';

@Component({
  selector: 'app-lista-estructura-votos',
  templateUrl: './lista-estructura-votos.component.html',
  styles: ``
})
export class ListaEstructuraVotosComponent implements OnChanges {

  @Input()
  ListaEstructura: GetEstructuraResponse[] =  [];

  public Estructura: ListaEstructura[] = [];



  displayedColumns: string[] = ['cmNombre', 'cmTelefono', 'czNombre', 'czTelefono', 'czSeccion','csNombre','csTelefono','csSeccion', 'pNombre','pTelefono','pSeccion','vNombre','vSeccion','vTelefono','vVoto'];
  dataSource: MatTableDataSource<ListaEstructura>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  fileName= 'ExcelSheet.xlsx';

  constructor(){
    this.Estructura= this.ListaEstructura;
    this.dataSource = new MatTableDataSource<ListaEstructura>(this.Estructura);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.Estructura= this.ListaEstructura;
    this.dataSource = new MatTableDataSource<ListaEstructura>(this.Estructura);
    this.dataSource.paginator = this.paginator;
  }

  exportexcel(): void
  {

    const rows = this.Estructura.map(row => ({
      C_Municipal: row.cmNombre,
      CM_Telefono: row.cmTelefono,
      C_Zona: row.czNombre,
      CZ_Telefono: row.czTelefono,
      CZ_Seccion: row.czSeccion,
      C_Seccion: row.csNombre,
      CS_Telefono: row.csTelefono,
      CS_Seccion: row.csSeccion,
      Promotor: row.pNombre,
      P_Telefono: row.pTelefono,
      P_Seccion: row.pSeccion,
      Votante: row.vNombre,
      V_Telefono: row.vTelefono,
      V_Seccion: row.vSeccion,
      V_Voto: row.vVoto,
      V_Traslado: row.vTraslado,
    }));


    const workSheet = XLSX.utils.json_to_sheet(rows, {header:['C_Municipal', 'CM_Telefono','C_Zona','CZ_Telefono', 'CZ_Seccion'
      ,'C_Seccion','CS_Telefono','CS_Seccion', 'Promotor', 'P_Telefono','P_Seccion'
      ,'Votante', 'V_Telefono', 'V_Seccion','V_Voto', 'V_Traslado']});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Estructura');
    XLSX.writeFile(workBook, 'Estructura.xlsx');



 
  }
  

  
}
