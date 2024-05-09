import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { StructureService } from '../../services/structure.service';
import { GetPartidoVotosSeccionResponse } from '../../interfaces/get-partido-votos-seccion-response.interface';

@Component({
  selector: 'app-lista-votos-partido-page',
  templateUrl: './lista-votos-partido-page.component.html',
  styles: ``
})
export class ListaVotosPartidoPageComponent implements OnInit {


  // private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute)
  private structureService = inject(StructureService);
  private router = inject(Router);

  public PartidoVotosSeccion: GetPartidoVotosSeccionResponse[] = [];
  public partidoName: string ='';
  public candidatoName: string ='';


  constructor() {

  }
  ngOnInit(): void {
    this.muestraPartido();
  }

  muestraPartido() {

    this.activatedRoute.params
      .pipe(
        // tap(({ id }) => { this.idPartido = id;}),
        switchMap(({ id }) => this.structureService.getPartidoVotosSeccion(id))
      )
      .subscribe({
        next: (PartidoVotos) => {
          //console.log('PartidoVotos:', PartidoVotos);
          this.PartidoVotosSeccion = PartidoVotos;
          this.partidoName=PartidoVotos[0].partido;
          this.candidatoName=PartidoVotos[0].candidato;
        },

        error: (err) => { console.log('Error:', err); }
      });

  }

  goBack(): void {
    this.router.navigateByUrl(`dashboard/rlist`);
  }


}
