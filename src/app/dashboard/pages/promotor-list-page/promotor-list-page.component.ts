import { Component, inject } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-promotor-list-page',
  templateUrl: './promotor-list-page.component.html',
  styles: ``
})
export class PromotorListPageComponent {

  private structureService = inject( StructureService );
  private activatedRoute = inject(ActivatedRoute)
  private router = inject(Router)
  public promotores: GetEstructuraResponse[] =  [];
  public miCoordinadorSeccion: string = '';

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.structureService.getEstructura(4, id, ''))
      )
      .subscribe(estructura => {
        if (!estructura) return this.router.navigateByUrl('/');
        this.promotores = estructura;
        this.miCoordinadorSeccion = estructura[0].csNombre;
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl(`dashboard/cslist/${this.promotores[0].id_coordinador_zona}`);
  }

}
