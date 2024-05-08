import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { VotanteTotalVotos } from '../../interfaces/votante-total-votos.interface';

@Component({
  selector: 'app-report-list-page',
  templateUrl: './report-list-page.component.html',
  styles: ``
})
export class ReportListPageComponent implements OnInit {

  private structureService = inject(StructureService);
  public TotalVotos = signal<VotanteTotalVotos | null>(null);
  // public total = computed( () => this.TotalVotos()![0]);
  public chartVotanteTotalVotos: number[] = [];
  public chartPartidoVotos: number[] = [];

  ngOnInit(): void {

    this.GetVotante_Total_Votos();
    this.GetPartidoVotos();

    setInterval(() => {
      this.GetVotante_Total_Votos();
      this.GetPartidoVotos();
    }, 20000)

  }

  GetVotante_Total_Votos() {

    this.chartVotanteTotalVotos = [];
    this.structureService.getVotanteTotalVotos()
      .subscribe(totalVotos => {
        this.TotalVotos.set(totalVotos[0]);
        this.chartVotanteTotalVotos.push(totalVotos[0].votos);
        this.chartVotanteTotalVotos.push(totalVotos[0].faltantes);
      });

  }

  GetPartidoVotos() {
    this.chartPartidoVotos=[];

    this.structureService.getPartidoVotos()
      .subscribe(total => {
        
        total.forEach((value) => {
          this.chartPartidoVotos.push(value.votos);
        });

      });

  }


}
