import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { PartidoCandidatoVoto} from '../../interfaces/partido-candidato-voto.interface';


// import ApexCharts from 'apexcharts';
// import {
//   ApexChart,
//   ApexAxisChartSeries,
//   ApexDataLabels,
//   ApexPlotOptions,
//   ApexYAxis,
//   ApexLegend,
//   ApexGrid,
// } from 'ng-apexcharts';

// type ApexXAxis = {
//   type?: 'category' | 'datetime' | 'numeric';
//   categories?: any;
//   labels?: {
//     style?: {
//       colors?: string | string[];
//       fontSize?: string;
//     };
//   };
// };

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   dataLabels: ApexDataLabels;
//   plotOptions: ApexPlotOptions;
//   yaxis: ApexYAxis;
//   xaxis: ApexXAxis;
//   grid: ApexGrid;
//   colors: string[];
//   legend: ApexLegend;
//   title: ApexTitleSubtitle;
// };

// public chartOptions: Partial<ChartOptions>;
// public chartOptions: Partial<ChartOptions>;

@Component({
  selector: 'app-chart-column-partidos',
  templateUrl: './chart-column-partidos.component.html',
  styles: ``,
})
export class ChartColumnPartidosComponent implements OnChanges {

  @Input() chartPartidoVotos?: PartidoCandidatoVoto[];

  private router = inject(Router);

  // options
  xAxisLabel = 'Partido / Candidato';
  showXAxis = true;
  showXAxisLabel = true;

  yAxisLabel = 'Cantidad';
  showYAxis = true;
  showYAxisLabel = true;

  gradient = false;
  showLegend = false;

  legendTitle = 'Votos por partido';

  colorScheme: Color = {
    domain: ['#621132', '#D50000', '#23C423', '#B71C1C', '#FF8000', '#00BCD4', '#512DAB', '#7B1FA2', '#BF360C', '#607D8B', '#212121',],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.LlenaGrafica();
  }

  LlenaGrafica(): void {
    this.single = [
      {
        "name": this.chartPartidoVotos![0].id_Partido + " - Morena (Jorge Lara)",
        "value": this.chartPartidoVotos![0].votos,
      },
      {
        "name": this.chartPartidoVotos![1].id_Partido + " - FCC (Laura Lopez)",
        "value": this.chartPartidoVotos![1].votos
      },
      {
        "name": this.chartPartidoVotos![2].id_Partido + " - PVEM (Ranulfo Llaven)",
        "value": this.chartPartidoVotos![2].votos
      },
      {
        "name": this.chartPartidoVotos![3].id_Partido + " - PT (Fredy Toala)",
        "value": this.chartPartidoVotos![3].votos
      },
      {
        "name": this.chartPartidoVotos![4].id_Partido + " - MC (Roney Champo)",
        "value": this.chartPartidoVotos![4].votos
      },
      {
        "name": this.chartPartidoVotos![5].id_Partido + " - CU (Maria Naranjo)",
        "value": this.chartPartidoVotos![5].votos
      },
      {
        "name": this.chartPartidoVotos![6].id_Partido + " - PMC (Ausencio Clemente)",
        "value": this.chartPartidoVotos![6].votos
      },
      {
        "name": this.chartPartidoVotos![7].id_Partido + " - PESC (Ana Perez)",
        "value": this.chartPartidoVotos![7].votos
      },
      {
        "name": this.chartPartidoVotos![8].id_Partido + " - RSPC (Rogi Lazaro)",
        "value": this.chartPartidoVotos![8].votos
      },
      {
        "name": this.chartPartidoVotos![9].id_Partido + " - Independientes",
        "value": this.chartPartidoVotos![9].votos
      },
      {
        "name": this.chartPartidoVotos![10].id_Partido + " - Nulos",
        "value": this.chartPartidoVotos![10].votos
      }
    ]
  }

  onSelect(event: any) {
    console.log(event);
    console.log(event.name.substr(0, 2));
    this.RedireccionaCasillas(Number(event.name.substr(0, 2)));



  }

  single = [
    {
      "name": "Morena - Jorge Lara",
      "value": 0
    },
    {
      "name": "FCC - Laura Lopez",
      "value": 0
    },
    {
      "name": "PVEM - Ranulfo Llaven",
      "value": 0
    },
    {
      "name": "PT - Fredy Toala",
      "value": 0
    },
    {
      "name": "MC - Roney Champo",
      "value": 0
    },
    {
      "name": "CU - Maria Naranjo",
      "value": 0
    },
    {
      "name": "PMC - Ausencio Clemente",
      "value": 0
    },
    {
      "name": "PESC - Ana Perez",
      "value": 0
    },
    {
      "name": "RSPC - Rogi Lazaro",
      "value": 0
    },
    {
      "name": "Independiente - Independiente",
      "value": 0
    },
    {
      "name": "Nulos - Nulos",
      "value": 0
    }
  ];




  // constructor() {
  //   this.LlenaGrafica();

  //   this.chartOptions = {...this.chartPartidoVotos, ...{
  //     series: [
  //       {
  //         name: 'Votos',
  //         data: this.chartPartidoVotos,
  //       },
  //     ],
  //     chart: {
  //       height: 350,
  //       type: 'bar',
  //       events: {
  //         click: (event: any, chartContext: any, config: any) => {
  //           this.RedireccionaCasillas(config.dataPointIndex);
  //         }
  //       },
  //     },
  //     colors: [
  //       '#621132',
  //       '#D50000',
  //       '#23C423',
  //       '#B71C1C',
  //       '#FF8000',
  //       '#00BCD4',
  //       '#512DAB',
  //       '#7B1FA2',
  //       '#BF360C',
  //       '#607D8B',
  //       '#212121',
  //     ],
  //     plotOptions: {
  //       bar: {
  //         columnWidth: '45%',
  //         distributed: true,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: true,
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     grid: {
  //       show: true,
  //     },
  //     title: {
  //       text: 'Votos por partido',
  //     },
  //     xaxis: {
  //       categories: [
  //         ['Morena', 'Jorge Lara'],
  //         ['FCC', 'Laura Lopez'],
  //         ['PVEM', 'Ranulfo Llaven'],
  //         ['PT', 'Fredy Toala'],
  //         ['MC', 'Roney Champo'],
  //         ['CU', 'Maria Naranjo'],
  //         ['PMC', 'Ausencio Clemente'],
  //         ['PESC', 'Ana Perez'],
  //         ['RSPC', 'Rogi Lazaro'],
  //         ['Independient', 'Independiente'],
  //         ['Nulos', 'Nulo'],
  //       ],
  //       labels: {
  //         style: {
  //           colors: [
  //             '#621132',
  //             '#FF3D00',
  //             '#23C423',
  //             '#B71C1C',
  //             '#FF8000',
  //             '#00BCD4',
  //             '#512DAB',
  //             '#7B1FA2',
  //             '#BF360C',
  //             '#607D8B',
  //             '#212121',
  //           ],
  //           fontSize: '12px',
  //         },
  //       },
  //     },
  //   }} ;

  //   window.dispatchEvent(new Event('resize'));
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.LlenaGrafica();
  //   window.dispatchEvent(new Event('resize'));
  // }

  // LlenaGrafica(): void {
  //   this.chartOptions = {...this.chartPartidoVotos, ...{
  //     series: [
  //       {
  //         name: 'Votos',
  //         data: this.chartPartidoVotos,
  //       },
  //     ],
  //     chart: {
  //       height: 350,
  //       type: 'bar',
  //       events: {
  //         click: (event: any, chartContext: any, config: any) => {
  //           this.RedireccionaCasillas(config.dataPointIndex);
  //         }
  //       },
  //     },
  //     colors: [
  //       '#621132',
  //       '#D50000',
  //       '#23C423',
  //       '#B71C1C',
  //       '#FF8000',
  //       '#00BCD4',
  //       '#512DAB',
  //       '#7B1FA2',
  //       '#BF360C',
  //       '#607D8B',
  //       '#212121',
  //     ],
  //     plotOptions: {
  //       bar: {
  //         columnWidth: '45%',
  //         distributed: true,
  //       },
  //     },
  //     dataLabels: {
  //       enabled: true,
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     grid: {
  //       show: true,
  //     },
  //     title: {
  //       text: 'Votos por partido',
  //     },
  //     xaxis: {
  //       categories: [
  //         ['Morena', 'Jorge Lara'],
  //         ['FCC', 'Laura Lopez'],
  //         ['PVEM', 'Ranulfo Llaven'],
  //         ['PT', 'Fredy Toala'],
  //         ['MC', 'Roney Champo'],
  //         ['CU', 'Maria Naranjo'],
  //         ['PMC', 'Ausencio Clemente'],
  //         ['PESC', 'Ana Perez'],
  //         ['RSPC', 'Rogi Lazaro'],
  //         ['Independient', 'Independiente'],
  //         ['Nulos', 'Nulo'],
  //       ],
  //       labels: {
  //         style: {
  //           colors: [
  //             '#621132',
  //             '#FF3D00',
  //             '#23C423',
  //             '#B71C1C',
  //             '#FF8000',
  //             '#00BCD4',
  //             '#512DAB',
  //             '#7B1FA2',
  //             '#BF360C',
  //             '#607D8B',
  //             '#212121',
  //           ],
  //           fontSize: '12px',
  //         },
  //       },
  //     },
  //   }} ;

  // }

  RedireccionaCasillas(partido: number){
    console.log('Redirecciona: ',partido+1);
    this.router.navigateByUrl(`dashboard/lvppage/${partido}`);
  }

}
