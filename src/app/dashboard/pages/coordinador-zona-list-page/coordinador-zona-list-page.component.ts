import { Component, inject, OnInit } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-coordinador-zona-list-page',
  templateUrl: './coordinador-zona-list-page.component.html',
  styles: ``
})
export class CoordinadorZonaListPageComponent implements OnInit {

  private structureService = inject( StructureService );
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  public coordinadoresZona: GetEstructuraResponse[] =  [];
  public miCoordinadorMunicipal: string = '';

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.structureService.getEstructura(2, id, ''))
      )
      .subscribe(estructura => {
        if (!estructura) return this.router.navigateByUrl('/');
        this.coordinadoresZona = estructura;
        this.miCoordinadorMunicipal = estructura[0].cmNombre;
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl(`dashboard/cmlist`);
  }


}
