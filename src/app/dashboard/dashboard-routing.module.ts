import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CoordinadorListPageComponent } from './pages/coordinador-list-page/coordinador-list-page.component';
import { LiderListPageComponent } from './pages/lider-list-page/lider-list-page.component';
import { VotanteListPageComponent } from './pages/votante-list-page/votante-list-page.component';
import { ReportListPageComponent } from './pages/report-list-page/report-list-page.component';
import { CoordinadorPageComponent } from './pages/coordinador-page/coordinador-page.component';
import { LiderPageComponent } from './pages/lider-page/lider-page.component';
import { VotantePageComponent } from './pages/votante-page/votante-page.component';
import { ListaEstructuraPageComponent } from './pages/lista-estructura-page/lista-estructura-page.component';
import { isAuthenticatedGuard } from '../auth/guards';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'clist', canActivate: [isAuthenticatedGuard], component: CoordinadorListPageComponent },
      {path: 'cpage/:id', canActivate: [isAuthenticatedGuard], component: CoordinadorPageComponent },
      {path: 'llist/:id', canActivate: [isAuthenticatedGuard], component: LiderListPageComponent },
      {path: 'lpage/:id', canActivate: [isAuthenticatedGuard], component: LiderPageComponent },
      {path: 'vlist/:id', canActivate: [isAuthenticatedGuard], component: VotanteListPageComponent },
      {path: 'vpage/:id', canActivate: [isAuthenticatedGuard], component: VotantePageComponent },
      {path: 'estructurapage/:tipo/:id', canActivate: [isAuthenticatedGuard], component: ListaEstructuraPageComponent },
      {path: 'rlist', canActivate: [isAuthenticatedGuard], component: ReportListPageComponent },
      { path: '**', redirectTo: 'rlist' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
