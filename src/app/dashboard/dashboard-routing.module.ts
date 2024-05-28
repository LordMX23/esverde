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
import { ListaVotosPartidoPageComponent } from './pages/lista-votos-partido-page/lista-votos-partido-page.component';
import { CoordinadorZonaListPageComponent } from './pages/coordinador-zona-list-page/coordinador-zona-list-page.component';
import { CoordinadorSeccionListPageComponent } from './pages/coordinador-seccion-list-page/coordinador-seccion-list-page.component';
import { PromotorListPageComponent } from './pages/promotor-list-page/promotor-list-page.component';
import { BuscaVotantePageComponent } from './pages/busca-votante-page/busca-votante-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      // Estructura
      {path: 'cmlist', canActivate: [isAuthenticatedGuard], component: CoordinadorListPageComponent },
      {path: 'czlist/:id', canActivate: [isAuthenticatedGuard], component: CoordinadorZonaListPageComponent },
      {path: 'cslist/:id', canActivate: [isAuthenticatedGuard], component: CoordinadorSeccionListPageComponent },
      {path: 'prlist/:id', canActivate: [isAuthenticatedGuard], component: PromotorListPageComponent },
      {path: 'vlist/:id', canActivate: [isAuthenticatedGuard], component: VotanteListPageComponent },
      {path: 'vpage/:id', canActivate: [isAuthenticatedGuard], component: VotantePageComponent },
      {path: 'estructurapage/:tipo/:id', canActivate: [isAuthenticatedGuard], component: ListaEstructuraPageComponent },
      // Dashboard
      {path: 'rlist', canActivate: [isAuthenticatedGuard], component: ReportListPageComponent },
      // Busqueda de votante
      {path: 'busca', canActivate: [isAuthenticatedGuard], component: BuscaVotantePageComponent },

      // YA NO
      {path: 'cpage/:id', canActivate: [isAuthenticatedGuard], component: CoordinadorPageComponent },
      {path: 'llist/:id', canActivate: [isAuthenticatedGuard], component: LiderListPageComponent },
      {path: 'lpage/:id', canActivate: [isAuthenticatedGuard], component: LiderPageComponent },      
      {path: 'lvppage/:id', canActivate: [isAuthenticatedGuard], component: ListaVotosPartidoPageComponent },
      
      { path: '**', redirectTo: 'rlist' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
