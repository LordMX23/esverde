import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../material/material.module';


import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
