import { Component } from '@angular/core';
import ApexCharts from 'apexcharts';
import {
  ApexChart,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
} from 'ng-apexcharts';

type ApexXAxis = {
  type?: 'category' | 'datetime' | 'numeric';
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart-column-partidos',
  templateUrl: './chart-column-partidos.component.html',
  styles: ``,
})
export class ChartColumnPartidosComponent {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Votos',
          data: [21, 22, 10, 28, 16, 21, 13, 21, 32, 21, 22],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          dataPointSelection: function (event, chartContext, config) {
            console.log('dataPointSelection');
            console.log(config.dataPointIndex);
            console.log(config);
          },
          xAxisLabelClick: function (event, chartContext, config) {
            console.log('xAxisLabelClick');
            console.log(config);
          },
        },
      },
      colors: [
        '#621132',
        '#D50000',
        '#23C423',
        '#B71C1C',
        '#FF8000',
        '#00BCD4',
        '#512DAB',
        '#7B1FA2',
        '#BF360C',
        '#607D8B',
        '#212121',
      ],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: false,
      },
      grid: {
        show: true,
      },
      title: {
        text: 'Votos por partido',
      },
      xaxis: {
        categories: [
          ['Morena', 'Jorge Lara'],
          ['FCC', 'Laura Lopez'],
          ['PVEM', 'Ranulfo Llaven'],
          ['PT', 'Fredy Toala'],
          ['MC', 'Roney Champo'],
          ['CU', 'Maria Naranjo'],
          ['PMC', 'Ausencio Clemente'],
          ['PESC', 'Ana Perez'],
          ['RSPC', 'Rogi Lazaro'],
          ['Independient', 'Independiente'],
          ['Nulos', 'Nulo'],
        ],
        labels: {
          style: {
            colors: [
              '#621132',
              '#FF3D00',
              '#23C423',
              '#B71C1C',
              '#FF8000',
              '#00BCD4',
              '#512DAB',
              '#7B1FA2',
              '#BF360C',
              '#607D8B',
              '#212121',
            ],
            fontSize: '12px',
          },
        },
      },
    };
  }
}
