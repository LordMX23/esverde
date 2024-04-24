import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap,} from 'rxjs';
import { StructureService } from '../../services/structure.service';
import { LiderResponse } from '../../interfaces/lider-response.interface';
import Swal from 'sweetalert2'
import { LiderUpdate } from '../../interfaces/lider-update.interface';

@Component({
  selector: 'app-lider-page',
  templateUrl: './lider-page.component.html',
  styles: ``
})
export class LiderPageComponent {

  constructor(){
    this.LlenaLider();
  }

  private fb          = inject( FormBuilder );
  private activatedRoute = inject(ActivatedRoute)
  private structureService = inject( StructureService );
  private router = inject(Router);
  public lider: LiderResponse[] = [];
  public urlId: number =0;

  public myForm: FormGroup = this.fb.group({
    nombre:    ['', [ Validators.required, Validators.minLength(10)] ],
    telefono: ['', [ Validators.required, Validators.minLength(10)]],
    domicilio: ['', ],
    referenciadom: ['', ],
    seccion: ['', [ Validators.required, Validators.minLength(2)]],
    
  });

  LlenaLider(){
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.structureService.getLiderById(id))
      ).subscribe({
        next: (lid) => {
          if( !lid  ) return this.router.navigateByUrl('/');
          this.lider=lid;
          this.myForm.reset({nombre: this.lider[0].nombre ,telefono: this.lider[0].telefono, domicilio: this.lider[0].domilio, 
          referenciadom: this.lider[0].referenciadom, seccion: this.lider[0].seccion});

          this.urlId = this.lider[0].idpadre;
          return;
      },
      error: (message) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
          footer: ''
        });
        return this.router.navigateByUrl('/');
      }
    });
  }
  

  updateLider(){
    const liderUpdate: LiderUpdate = {
      'id_coordinador' : this.lider[0].idpadre,
      'nombre': this.myForm.get('nombre')?.value,
      'telefono': this.myForm.get('telefono')?.value,
      'domicilio': this.myForm.get('domicilio')?.value,
      'referenciadom': this.myForm.get('referenciadom')?.value,
      "cve_colonia": Number(this.lider[0].colonia),
      "seccion": this.myForm.get('seccion')?.value,
      "inefrente": this.lider[0].inefrente,
      "ocr": this.lider[0].ocr,
      'id_user':  1,
      'operacion': 'C',
      'id_lider': this.lider[0].id
    };

    this.structureService.UpdateLiderById(liderUpdate)
    .subscribe({
      next: () => {
          Swal.fire({
            icon: "success",
            title: "Actualizado",
            text: "Los datos del Lider se actualizaron",
            footer: ''
          });
        },
      error: (message) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: message,
          footer: ''
        });
      }
    });
  }

  goBack(): void {

    this.router.navigateByUrl(`dashboard/llist/${this.urlId}`);
  }

}
