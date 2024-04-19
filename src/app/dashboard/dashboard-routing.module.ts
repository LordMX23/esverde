import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CoordinadorListPageComponent } from './pages/coordinador-list-page/coordinador-list-page.component';
import { LiderListPageComponent } from './pages/lider-list-page/lider-list-page.component';
import { VotanteListPageComponent } from './pages/votante-list-page/votante-list-page.component';
import { ReportListPageComponent } from './pages/report-list-page/report-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'clist', component: CoordinadorListPageComponent },
      // {path: 'llist', component: LiderListPageComponent },
      {path: 'llist/:id', component: LiderListPageComponent },
      // {path: 'vlist', component: VotanteListPageComponent },
      {path: 'vlist/:id', component: VotanteListPageComponent },
      {path: 'rlist', component: ReportListPageComponent },
      { path: '**', redirectTo: 'clist' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
