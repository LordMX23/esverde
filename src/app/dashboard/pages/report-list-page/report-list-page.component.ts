import { Component, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,

 
} from "ng-apexcharts";



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
 
};


@Component({
  selector: 'app-report-list-page',
  templateUrl: './report-list-page.component.html',
  styles: ``
})
export class ReportListPageComponent {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: [62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Votos por partido"
      },
      xaxis: {
        categories: ["PAN",  "PRI",  "MORENA", "PVEM"]
      },
    };

  }

}
