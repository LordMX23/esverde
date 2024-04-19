import { Component, inject, OnInit } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { VotanteResponse } from '../../interfaces/votante-response.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-votante-list-page',
  templateUrl: './votante-list-page.component.html',
  styles: ``
})
export class VotanteListPageComponent implements OnInit{

  private structureService = inject( StructureService );
  public votantes: VotanteResponse[] =  [];
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.structureService.getVotante('1','12',id))
      ).subscribe( votante => {
        if( !votante ) return this.router.navigateByUrl('/');

        this.votantes = votante;
        return;
      });

  }

}
