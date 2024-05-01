import { Component, inject, OnInit } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { CoordinadorResponse } from '../../interfaces/coordinador-response.interface';

@Component({
  selector: 'app-coordinador-list-page',
  templateUrl: './coordinador-list-page.component.html',
  styles: ``
})
export class CoordinadorListPageComponent {

  private structureService = inject( StructureService );
  public coordinadores: CoordinadorResponse[] =  [];


  constructor() {

    this.structureService.getCoordinadorList("1","1","1")
    .subscribe(coordi => this.coordinadores = coordi);
  }

}
