import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-chart-pie-structure',
  templateUrl: './chart-pie-structure.component.html',
  styles: ``
})
export class ChartPieStructureComponent {

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [315, 960],
      chart: {
        type: "donut"
      },
      labels: ["Votos", "Faltantes"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }


}
