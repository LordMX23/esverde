import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { GetListaVotosResponse } from '../../interfaces/get-lista-votos-response.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-lista-estructura-votos',
  templateUrl: './lista-estructura-votos.component.html',
  styles: ``
})
export class ListaEstructuraVotosComponent implements OnChanges {

  @Input()
  ListaVotos: GetListaVotosResponse[] =  [];


  displayedColumns: string[] = ['coordinador', 'lider', 'votante', 'telefono', 'voto'];
  dataSource: MatTableDataSource<GetListaVotosResponse>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  fileName= 'ExcelSheet.xlsx';

  constructor(){
    this.dataSource = new MatTableDataSource<GetListaVotosResponse>(this.ListaVotos);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<GetListaVotosResponse>(this.ListaVotos);
    this.dataSource.paginator = this.paginator;
  }

  exportexcel(): void
  {
    // /* pass here the table id */
    // let element = document.getElementById('excel-table');
    // const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    // /* generate workbook and add the worksheet */
    // const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    // /* save to file */  
    // XLSX.writeFile(wb, this.fileName);


    // const workSheet = XLSX.utils.json_to_sheet(this.dataSource.data, {header:['dataprop1', 'dataprop2']});

    const rows = this.ListaVotos.map(row => ({
      Coordinador: row.coordinador,
      Lider: row.lider,
      Votante: row.votante,
      Seccion: row.seccion,
      Telefono: row.telefono,
      Voto: row.voto
    }));


    const workSheet = XLSX.utils.json_to_sheet(rows, {header:['Coordinador', 'Lider','Votante','Seccion', 'Telefono','Voto']});
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Estructura');
    XLSX.writeFile(workBook, 'Estructura.xlsx');



 
  }
  

  
}
