import { Component, inject } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-coordinador-seccion-list-page',
  templateUrl: './coordinador-seccion-list-page.component.html',
  styles: ``
})
export class CoordinadorSeccionListPageComponent {

  private structureService = inject( StructureService );
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  public coordinadoresSeccion: GetEstructuraResponse[] =  [];
  public miCoordinadorZona: string = '';

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.structureService.getEstructura(3, id, ''))
      )
      .subscribe(estructura => {
        if (!estructura) return this.router.navigateByUrl('/');
        this.coordinadoresSeccion = estructura;
        this.miCoordinadorZona = estructura[0].czNombre;
        return;
      });
  }

  goBack(): void {

    this.router.navigateByUrl(`dashboard/czlist/${this.coordinadoresSeccion[0].id_coordinador_municipal}`);
  }

}
