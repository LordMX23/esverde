import { Component, inject, OnInit } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { VotanteResponse } from '../../interfaces/votante-response.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-votante-list-page',
  templateUrl: './votante-list-page.component.html',
  styles: ``
})
export class VotanteListPageComponent{

  private structureService = inject( StructureService );
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)

  public votantes: VotanteResponse[] =  [];
  public urlId: number =0;

  constructor() {
    this.ListaVotante();
    this.GetCoordinadorByLiderId();
  }

  ListaVotante(){
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.structureService.getVotante('1','12',id))
      ).subscribe(
        {
          next: (votante) => {
            if( !votante ) return this.router.navigateByUrl('/');
            this.votantes = votante;
            return;
            },
          error: (message) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: message,
              footer: ''
            });
            return this.router.navigateByUrl('/');
          }
        }
    );
  }

  GetCoordinadorByLiderId(){
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.structureService.getLiderById(id))
      ).subscribe({
        next: (lid) => {
          if( !lid  ) return this.router.navigateByUrl('/');
          this.urlId = lid[0].idpadre;
          console.log(lid[0]);
          return;
      },
      error: (message) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
          footer: ''
        });
        return this.router.navigateByUrl('/');
      }
    });
  }

  goBack(): void {
    this.router.navigateByUrl(`dashboard/llist/${this.urlId}`);
  }

}
