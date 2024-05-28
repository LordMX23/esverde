import { Component } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { VotanteResponse } from '../../interfaces/votante-response.interface';
import { VotanteUpdate } from '../../interfaces/votante-update.interface';
import { PromovidoResponse } from '../../interfaces/coordinador-response.interface';

@Component({
  selector: 'app-votante-search-result-table',
  templateUrl: './votante-search-result-table.component.html',
  styles: ``
})
export class VotanteSearchResultTableComponent {

  constructor( private structureService: StructureService){}

  public selectedId: string = '';
  public votante: PromovidoResponse[]= [];
  // this.votante=[];

  get isLoadingVotante(): boolean{
    return this.structureService.isLoadingEstructura;
  }

  get votantesResponse(): PromovidoResponse[]{
    return this.structureService.votantes;
  }

  getVotanteById(idVotante: number){
    
    this.structureService.getEstructura(11, idVotante, '')
      .subscribe(Promovido => this.votante = Promovido);
  }

  resetForm() {this.votante=[];}


}
