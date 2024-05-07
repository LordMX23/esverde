import { Component, inject, OnInit } from '@angular/core';
import { GetListaVotosResponse } from '../../interfaces/get-lista-votos-response.interface';
import { StructureService } from '../../services/structure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

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
  private back: number = 0;

  ngOnInit(): void {
    // Primer AR
    this.activatedRoute.params
      .pipe(
        // switchMap( ({ tipo, id }) => this.structureService.getListaVotos(tipo,id))
        switchMap((params) =>
          this.structureService.getListaVotos(params['tipo'], params['id'])
        )
      )
      .subscribe((lista) => {
        this.ListaVotos = lista;
        return;
      });

    // Segundo AR
    this.activatedRoute.params
      .pipe(
        switchMap(({ tipo, id }) => {
          if (tipo == 1) /* Coordinador*/ return of(0);
          if (tipo == 2) /* Lider */ return of(id);

          return of(0);
        })
      )
      .subscribe((valor) => {
        this.back = valor;
        return;
      });
  }

  goBack(): void {
    console.log(this.back);
    if (this.back == 0) this.router.navigateByUrl('dashboard/clist');

    if (this.back > 0) {
      this.structureService.getLiderById(this.back.toString())
        .subscribe({
          next: (lid) => {
            this.router.navigateByUrl(`dashboard/llist/${lid[0].idpadre}`);
            return;
          }
        });
    }
  }

  
}
