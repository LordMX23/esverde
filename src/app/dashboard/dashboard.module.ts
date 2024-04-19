import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CoordinadorListPageComponent } from './pages/coordinador-list-page/coordinador-list-page.component';
import { MaterialModule } from '../material/material.module';
import { LiderListPageComponent } from './pages/lider-list-page/lider-list-page.component';
import { VotanteListPageComponent } from './pages/votante-list-page/votante-list-page.component';
import { ReportListPageComponent } from './pages/report-list-page/report-list-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    CoordinadorListPageComponent,
    LiderListPageComponent,
    VotanteListPageComponent,
    ReportListPageComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
