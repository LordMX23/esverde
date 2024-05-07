import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { VotanteTotalVotos } from '../../interfaces/votante-total-votos.interface';

@Component({
  selector: 'app-report-list-page',
  templateUrl: './report-list-page.component.html',
  styles: ``
})
export class ReportListPageComponent implements OnInit {

  private structureService = inject( StructureService );
  public TotalVotos = signal<VotanteTotalVotos | null >( null );
  // public total = computed( () => this.TotalVotos()![0]);
  public chartSerie: number[] = [];

  ngOnInit(): void {
    this.GetVotante_Total_Votos();
  }

  GetVotante_Total_Votos(){
    this.structureService.getVotanteTotalVotos()
    .subscribe(total => {
      this.TotalVotos.set(total[0]);
      this.chartSerie.push(total[0].votos);
      this.chartSerie.push(total[0].faltantes);
    });
  }


}
