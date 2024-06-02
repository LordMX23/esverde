import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { CustomValidatorLabelDirective } from './directives/custom-validator-label.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    Error404PageComponent,
    CustomValidatorLabelDirective,
  ],
  imports:[
    CommonModule
  ],
  exports:[Error404PageComponent,
    CustomValidatorLabelDirective
  ]
})
export class SharedModule { }
