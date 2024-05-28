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
import { ChartPieStructureComponent } from './components/chart-pie-structure/chart-pie-structure.component';
import { ChartColumnPartidosComponent } from './components/chart-column-partidos/chart-column-partidos.component';
import { ListVotantesTableComponent } from './components/list-votantes-table/list-votantes-table.component';
import { ListLideresTableComponent } from './components/list-lideres-table/list-lideres-table.component';
import { ListCoordinadoresTableComponent } from './components/list-coordinadores-table/list-coordinadores-table.component';
import { ListaEstructuraVotosComponent } from './components/lista-estructura-votos/lista-estructura-votos.component';
import { ListaEstructuraPageComponent } from './pages/lista-estructura-page/lista-estructura-page.component';
import { ListaVotosPartidoCasillaComponent } from './components/lista-votos-partido-casilla/lista-votos-partido-casilla.component';
import { ListaVotosPartidoPageComponent } from './pages/lista-votos-partido-page/lista-votos-partido-page.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CoordinadorZonaListPageComponent } from './pages/coordinador-zona-list-page/coordinador-zona-list-page.component';
import { ListCoordinadoresZonaTableComponent } from './components/list-coordinadores-zona-table/list-coordinadores-zona-table.component';
import { CoordinadorSeccionListPageComponent } from './pages/coordinador-seccion-list-page/coordinador-seccion-list-page.component';
import { ListCoordinadoresSeccionTableComponent } from './components/list-coordinadores-seccion-table/list-coordinadores-seccion-table.component';
import { PromotorListPageComponent } from './pages/promotor-list-page/promotor-list-page.component';
import { ListPromotorTableComponent } from './components/list-promotor-table/list-promotor-table.component';
import { BuscaVotantePageComponent } from './pages/busca-votante-page/busca-votante-page.component';
import { VotanteSearchResultTableComponent } from './components/votante-search-result-table/votante-search-result-table.component';
import { VotanteUpdateComponent } from './components/votante-update/votante-update.component';



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
    ListaVotosPartidoPageComponent,
    CoordinadorZonaListPageComponent,
    ListCoordinadoresZonaTableComponent,
    CoordinadorSeccionListPageComponent,
    ListCoordinadoresSeccionTableComponent,
    PromotorListPageComponent,
    ListPromotorTableComponent,
    BuscaVotantePageComponent,
    VotanteSearchResultTableComponent,
    VotanteUpdateComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxChartsModule
  ]
})
export class DashboardModule { }
