import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureService } from '../../services/structure.service';
import { switchMap } from 'rxjs';
import { CoordinadorResponse } from '../../interfaces/coordinador-response.interface';
import { CoordinadorUpdate } from '../../interfaces/coordinador-update.interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-coordinador-page',
  templateUrl: './coordinador-page.component.html',
  styles: ``
})
export class CoordinadorPageComponent {
  
  constructor(){
    this.LlenaCoordinador();
  }


  private fb          = inject( FormBuilder );
  private activatedRoute = inject(ActivatedRoute)
  private structureService = inject( StructureService );
  private router = inject(Router);
  public coordinador: CoordinadorResponse[] = [];

    
  public myForm: FormGroup = this.fb.group({
    nombre:    ['', [ Validators.required, Validators.minLength(10)] ],
    telefono: ['', [ Validators.required, Validators.minLength(10)]],
  });
  

  LlenaCoordinador(){

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.structureService.getCoordinadorById(id))
      ).subscribe( coordi => {
        if( !coordi ) return this.router.navigateByUrl('/');
          this.coordinador=coordi;
          //this.myForm.reset({nombre: this.coordinador[0].nombre ,telefono: this.coordinador[0].telefono });
        return;
      });

  }

  updateCoordinador()
  {
    // const coordUpdate: CoordinadorUpdate = {
    //   'id_candidato': this.coordinador[0].idpadre,
    //   'nombre': this.myForm.get('nombre')?.value,
    //   'telefono': this.myForm.get('telefono')?.value,
    //   'inefrente': this.coordinador[0].inefrente,
    //   'ocr': this.coordinador[0].ocr,
    //   'id_user': 1,
    //   'operacion': 'C',
    //   'id_coordinador': this.coordinador[0].id

    // };

    
    // this.structureService.UpdateCoordinadorById(coordUpdate)
    // .subscribe({
    //   next: () => {
    //       Swal.fire({
    //         icon: "success",
    //         title: "Actualizado",
    //         text: "Los datos del Coordinador se actualizaron",
    //         footer: ''
    //       });
    //     },
    //   error: (message) => {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: message,
    //       footer: ''
    //     });
    //   }
    // });
  }

  goBack(): void {
    this.router.navigateByUrl('dashboard/clist')
  }

}
