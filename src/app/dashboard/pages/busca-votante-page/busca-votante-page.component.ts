import { Component } from '@angular/core';
import { StructureService } from '../../services/structure.service';

@Component({
  selector: 'app-busca-votante-page',
  templateUrl: './busca-votante-page.component.html',
  styles: ``
})
export class BuscaVotantePageComponent {

  constructor( private structureService: StructureService){}

  private debounceTimer?: NodeJS.Timeout;

  onQueryChanged(query: string =''){
    // verifica si tiene valor "this.debounceTimer" y lo limpia
    if(this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.structureService.getVotanteByName(query);
    }, 500);
  }

}
