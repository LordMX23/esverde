import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { StructureService } from '../../services/structure.service';
import { VotanteTotalVotos } from '../../interfaces/votante-total-votos.interface';
import { PartidoCandidatoVoto } from '../../interfaces/partido-candidato-voto.interface';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-report-list-page',
  templateUrl: './report-list-page.component.html',
  styles: ``
})
export class ReportListPageComponent implements OnInit {

  private structureService = inject(StructureService);
  public TotalVotos = signal<VotanteTotalVotos | null>(null);
  // public total = computed( () => this.TotalVotos()![0]);
  public chartVotanteTotalVotos: VotanteTotalVotos[] = [];
  // public chartPartidoVotos: number[] = [];
  public chartPartidoVotos?: PartidoCandidatoVoto[];

  ngOnInit(): void {

    this.GetVotante_Total_Votos();
    this.GetPartidoVotos();

    setInterval(() => {
      this.GetVotante_Total_Votos();
      this.GetPartidoVotos();
    }, 60000)

  }

  GetVotante_Total_Votos() {

    // this.chartVotanteTotalVotos = [];
    this.structureService.getVotanteTotalVotos()
      .subscribe(totalVotos => {
        this.TotalVotos.set(totalVotos[0]);
        this.chartVotanteTotalVotos=totalVotos;
        // this.chartVotanteTotalVotos.push(totalVotos[0].votos);
        // this.chartVotanteTotalVotos.push(totalVotos[0].faltantes);
      });

  }

  GetPartidoVotos() {
    this.structureService.getPartidoVotos()
      .subscribe(total => {

        // total.forEach((value) => {
        //   let pv: PartidoCandidatoVoto = {partido: value.partido, candidato: value.candidato, votos: value.votos}
        //   this.chartPartidoVotos?.push(pv)
        // });

        this.chartPartidoVotos = total;
      });

  }


}
