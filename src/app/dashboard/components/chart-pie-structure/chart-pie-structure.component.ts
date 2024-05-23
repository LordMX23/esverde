import { Component,  Input, OnChanges,  SimpleChanges } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { VotanteTotalVotos } from '../../interfaces/votante-total-votos.interface';

// import {
//   ApexNonAxisChartSeries,
//   ApexResponsive,
//   ApexChart,
// } from 'ng-apexcharts';

// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
//   colors: string[];
// };

@Component({
  selector: 'app-chart-pie-structure',
  templateUrl: './chart-pie-structure.component.html',
  styles: ``,
})
export class ChartPieStructureComponent implements OnChanges {
  
  // public chartOptions: Partial<ChartOptions>;
  @Input() chartVotanteTotalVotos?: VotanteTotalVotos[]=[];

  view: [number, number] = [200, 200];

    // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below;

   colorScheme: Color = {
    domain: ['#23C423', '#D50000'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'ChartPie',
  };

  private voto: number = 0;
  private faltante: number = 0;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.LlenaGrafica();
    // console.log(this.chartVotanteTotalVotos);

    // let total = this.chartVotanteTotalVotos;

    // // this.voto = this.chartVotanteTotalVotos![0];
    // // this.faltante = this.chartVotanteTotalVotos![1];

    // // const result = this.chartVotanteTotalVotos?.map(n => ({ id: n }));

    // console.log(total![0]);
  }

  single = [
    {
      "name": "Votos",
      "value": 0
    },
    {
      "name": "Faltantes",
      "value": 0
    },
  ];

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }


  LlenaGrafica(): void {
    this.single = [
      {
        "name": "Votos",
        "value": this.chartVotanteTotalVotos![0].votos
      },
      {
        "name": "Faltantes",
        "value": this.chartVotanteTotalVotos![0].faltantes
      },
    ]
  }

  // constructor() {
  //   this.LlenaGrafica();

  //   this.chartOptions = {
  //     series: this.chartVotanteTotalVotos,
  //     chart: {
  //       type: 'donut',
  //     },
  //     colors: ['#23C423', '#D50000'],
  //     labels: ['Votos', 'Faltantes'],
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           chart: {
  //             width: 200,
  //           },
  //           legend: {
  //             position: 'bottom',
  //           },
  //         },
  //       },
  //     ],
  //   };
    
  //   window.dispatchEvent(new Event('resize'));
  // }
  
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.LlenaGrafica();
  //   window.dispatchEvent(new Event('resize'));
  // }

  // LlenaGrafica(): void {

  //   this.chartOptions = {
  //     series: this.chartVotanteTotalVotos,
  //     chart: {
  //       type: 'donut',
  //     },
  //     colors: ['#23C423', '#D50000'],
  //     labels: ['Votos', 'Faltantes'],
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           chart: {
  //             width: 200,
  //           },
  //           legend: {
  //             position: 'bottom',
  //           },
  //         },
  //       },
  //     ],
  //   };
  // }

}
