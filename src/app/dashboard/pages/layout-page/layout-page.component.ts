import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  private authService = inject( AuthService );
  public user = computed(() => this.authService.currentUser());


  public sidebarItems = [
    {label: 'Listado', icon: 'label', url:'./clist'},
    {label: 'Dashboard', icon: 'dashboard', url:'./rlist'}
  ];

  constructor(
      private router: Router
  ){}

  // get user(){
  //   return this.authService.currentUser();
  // }

  /*Recuperar*/
  // get user(): string | null{
  //   return localStorage.getItem('nombre');
  // }

  onLogout(){
    this.authService.logout();
  }

}
