import { Component,  Input, OnChanges,  SimpleChanges } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors: string[];
};

@Component({
  selector: 'app-chart-pie-structure',
  templateUrl: './chart-pie-structure.component.html',
  styles: ``,
})
export class ChartPieStructureComponent implements OnChanges {
  
  public chartOptions: Partial<ChartOptions>;

  @Input() chartVotanteTotalVotos: number[] = [];

  constructor() {
    this.LlenaGrafica();

    this.chartOptions = {
      series: this.chartVotanteTotalVotos,
      chart: {
        type: 'donut',
      },
      colors: ['#23C423', '#D50000'],
      labels: ['Votos', 'Faltantes'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.LlenaGrafica();
  }

  LlenaGrafica(): void {

    this.chartOptions = {
      series: this.chartVotanteTotalVotos,
      chart: {
        type: 'donut',
      },
      colors: ['#23C423', '#D50000'],
      labels: ['Votos', 'Faltantes'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

}
