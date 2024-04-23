import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { StructureService } from '../../services/structure.service';
import { LiderResponse } from '../../interfaces/lider-response.interface';

@Component({
  selector: 'app-lider-page',
  templateUrl: './lider-page.component.html',
  styles: ``
})
export class LiderPageComponent {

  private fb          = inject( FormBuilder );
  private activatedRoute = inject(ActivatedRoute)
  private structureService = inject( StructureService );
  private router = inject(Router);
  public coordinador: LiderResponse[] = [];

  public myForm: FormGroup = this.fb.group({
    nombre:    ['', [ Validators.required, Validators.minLength(10)] ],
    telefono: ['', [ Validators.required, Validators.minLength(10)]],
    domicilio: ['', [ Validators.required, Validators.minLength(10)]],
    referenciadom: ['', [ Validators.required, Validators.minLength(10)]],
    seccion: ['', [ Validators.required, Validators.minLength(4)]],
    
  });

  updateLider(){}

  goBack(): void {

    this.router.navigateByUrl('dashboard/llist/19')
  }

}
