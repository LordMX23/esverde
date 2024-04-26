import { Component } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
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
  styles: ``
})
export class ChartColumnPartidosComponent {

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Votos",
          data: [21, 22, 10, 28, 16, 21, 13, 21]
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
          // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#008FFB",
        "#FEB019",
        "#FF4560",
        "#00E396",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: true
      },
      legend: {
        show: false
      },
      grid: {
        show: true
      },
      title: {
        text: "Votos por partido"
      },
      xaxis: {
        categories: [
          ["PRI", "Doe"],
          ["Morena", "Smith"],
          ["PAN", "Williams"],
          ["PVEM","Ranulfo"],
          ["PRD", "Brown"],
          ["Coa01", "Evans"],
          ["Coa02", "Wilson"],
          ["Coa03", "Roberts"]
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#FEB019",
              "#FF4560",
              "#00E396",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };
  }

}
