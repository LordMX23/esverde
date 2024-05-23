import { Component, inject, OnInit } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { CoordinadorResponse } from '../../interfaces/coordinador-response.interface';
import { GetEstructuraResponse } from '../../interfaces/getEstructuraResponse.interface';

@Component({
  selector: 'app-coordinador-list-page',
  templateUrl: './coordinador-list-page.component.html',
  styles: ``
})
export class CoordinadorListPageComponent {

  private structureService = inject( StructureService );
  public coordinadores: GetEstructuraResponse[] =  [];


  constructor() {

    this.structureService.getEstructura(1,4,"x")
    .subscribe(coordi => this.coordinadores = coordi);
  }

}
