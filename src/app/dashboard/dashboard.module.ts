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
import { ListVotantesTableComponent } from './components/list-votantes-table/list-votantes-table.component';
import { ListLideresTableComponent } from './components/list-lideres-table/list-lideres-table.component';
import { ListCoordinadoresTableComponent } from './components/list-coordinadores-table/list-coordinadores-table.component';
import { ListaEstructuraVotosComponent } from './components/lista-estructura-votos/lista-estructura-votos.component';
import { ListaEstructuraPageComponent } from './pages/lista-estructura-page/lista-estructura-page.component';
import { ListaVotosPartidoCasillaComponent } from './components/lista-votos-partido-casilla/lista-votos-partido-casilla.component';
import { ListaVotosPartidoPageComponent } from './pages/lista-votos-partido-page/lista-votos-partido-page.component';



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
    ChartColumnPartidosComponent,
    ListVotantesTableComponent,
    ListLideresTableComponent,
    ListCoordinadoresTableComponent,
    ListaEstructuraVotosComponent,
    ListaEstructuraPageComponent,
    ListaVotosPartidoCasillaComponent,
    ListaVotosPartidoPageComponent
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
