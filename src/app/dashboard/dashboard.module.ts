import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CoordinadorListPageComponent } from './pages/coordinador-list-page/coordinador-list-page.component';
import { MaterialModule } from '../material/material.module';
import { LiderListPageComponent } from './pages/lider-list-page/lider-list-page.component';
import { VotanteListPageComponent } from './pages/votante-list-page/votante-list-page.component';
import { ReportListPageComponent } from './pages/report-list-page/report-list-page.component';
import { CoordinadorPageComponent } from './pages/coordinador-page/coordinador-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LiderPageComponent } from './pages/lider-page/lider-page.component';
import { VotantePageComponent } from './pages/votante-page/votante-page.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartPieStructureComponent } from './components/chart-pie-structure/chart-pie-structure.component';
import { ChartColumnPartidosComponent } from './components/chart-column-partidos/chart-column-partidos.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    CoordinadorListPageComponent,
    LiderListPageComponent,
    VotanteListPageComponent,
    ReportListPageComponent,
    CoordinadorPageComponent,
    LiderPageComponent,
    VotantePageComponent,
    ChartPieStructureComponent,
    ChartColumnPartidosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
