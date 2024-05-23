import { Component, inject, OnInit } from '@angular/core';
import { GetListaVotosResponse } from '../../interfaces/get-lista-votos-response.interface';
import { StructureService } from '../../services/structure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';

@Component({
  selector: 'app-lista-estructura-page',
  templateUrl: './lista-estructura-page.component.html',
  styles: ``,
})
export class ListaEstructuraPageComponent implements OnInit {
  private structureService = inject(StructureService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  public ListaVotos: GetListaVotosResponse[] = [];
  public ListaEstructura: GetEstructuraResponse[] =  [];
  private idTipo: number = 0;
  private back: number = 0;

  ngOnInit(): void {
    // Primer AR para generar la Estructura
    this.activatedRoute.params
      .pipe(
        switchMap((params) =>
        this.structureService.getEstructura(params['tipo'], params['id'],'') // switchMap( ({ tipo, id }) => this.structureService.getListaVotos(tipo,id))
        )
      )
      .subscribe((lista) => {
        this.ListaEstructura = lista;
        return;
      });

      

    // Segundo AR para 
    this.activatedRoute.params
      .pipe(
        switchMap(({ tipo, id }) => {
          if (tipo == 7){ /* 7 = Estructura de tbl_coordinador_municipal */
            this.idTipo=0/* Sin parametro carga Listado de Coordinadores Municipales */
            return of(0);
          } 
          if (tipo == 8){ /* 8 = Estructura de coordinador_zona */
            this.idTipo=2 /* Parametro 2 carga Listado de Coordinadores de zona */ 
            return of(id);
          }
          if (tipo == 9){ /* 9 = Estructura de coordinador_seccion */
            this.idTipo=3 /* Parametro 3 carga Listado de Coordinadores de seccion */ 
            return of(id);
          }
          if (tipo == 10){  /* 10 = Estructura de promotor */
            this.idTipo=4 /* Parametro 3 carga Listado de Coordinadores de seccion */ 
            return of(id);
          }
          if (tipo == 5){ /* Votante */ 
            this.idTipo=5
            return of(id);
          }

          return of(0);
        })
      )
      .subscribe((valor) => {
        this.back = valor;
        return;
      });
  }

  goBack(): void {
    //console.log(this.back);
    if (this.idTipo == 0) this.router.navigateByUrl('dashboard/cmlist');
    if (this.idTipo == 2) this.router.navigateByUrl(`dashboard/czlist/2`);
    if (this.idTipo == 3){ this.router.navigateByUrl(`dashboard/cslist/${this.ListaEstructura[0].id_coordinador_zona}`); } 
    if (this.idTipo == 4){ this.router.navigateByUrl(`dashboard/prlist/${this.ListaEstructura[0].id_coordinador_seccion}`); } 

    // if (this.back == 0) this.router.navigateByUrl('dashboard/cmlist');
    // if (this.back > 0) {
    //   this.structureService.getLiderById(this.back.toString())
    //     .subscribe({
    //       next: (lid) => {
    //         this.router.navigateByUrl(`dashboard/llist/${lid[0].idpadre}`);
    //         return;
    //       }
    //     });
    // }
  }

  
}
