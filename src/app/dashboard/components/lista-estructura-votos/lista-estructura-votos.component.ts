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
      'Coord. Municipal': row.cmNombre,
      'Coord Municipal Telefono': row.cmTelefono,
      'Coord. Zona': row.czNombre,
      'Coord. Zona Telefono': row.czTelefono,
      'Coord. Zona Seccion': row.czSeccion,
      'Coord. Seccion': row.csNombre,
      'Coord Seccion Telefono': row.csTelefono,
      'Coord Seccion Seccion': row.csSeccion,
      'Promotor': row.pNombre,
      'Promotor Telefono': row.pTelefono,
      'Promotor Seccion': row.pSeccion,
      'Votante': row.vNombre,
      'Votante Telefono': row.vTelefono,
      'Votante Seccion': row.vSeccion,
      'Votante Voto': row.vVoto,
      'Votante Traslado': row.vTraslado,
      'Votante Colonia': row.coloniaD
    }));


    const workSheet = XLSX.utils.json_to_sheet(rows, {header:[]});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Estructura');
    XLSX.writeFile(workBook, 'Estructura.xlsx');

    // const workSheet = XLSX.utils.json_to_sheet(rows, {header:['C_Municipal', 'CM_Telefono','C_Zona','CZ_Telefono', 'CZ_Seccion'
    //   ,'C_Seccion','CS_Telefono','CS_Seccion', 'Promotor', 'P_Telefono','P_Seccion'
    //   ,'Votante', 'V_Telefono', 'V_Seccion','V_Voto', 'V_Traslado']});
    // const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(workBook, workSheet, 'Estructura');
    // XLSX.writeFile(workBook, 'Estructura.xlsx');



 
  }
  

  
}
