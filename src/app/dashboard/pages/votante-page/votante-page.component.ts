import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StructureService } from '../../services/structure.service';
import { VotanteResponse } from '../../interfaces/votante-response.interface';
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2'
import { VotanteUpdate } from '../../interfaces/votante-update.interface';

@Component({
  selector: 'app-votante-page',
  templateUrl: './votante-page.component.html',
  styles: ``
})
export class VotantePageComponent {
  
  constructor()
  {
    this.LlenaVotante();
  }

  private fb          = inject( FormBuilder );
  private activatedRoute = inject(ActivatedRoute)
  private structureService = inject( StructureService );
  private router = inject(Router);
  public votante: VotanteResponse[] = [];
  public urlId: number =0;

  color = 'accent';
  checked = false;
  disabled = false;

  public myForm: FormGroup = this.fb.group({
    nombre:    ['', [ Validators.required, Validators.minLength(10)]],
    telefono: ['', [ Validators.required, Validators.minLength(10)]],
    domicilio: ['', ],
    referenciadom: ['', ],
    seccion: ['', [ Validators.required, Validators.minLength(2)]],
    traslado: [{value: false}],
    
  });

  LlenaVotante(){
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.structureService.getVotanteById(id))
      ).subscribe({
        next: (vot) => {
          if( !vot  ) return this.router.navigateByUrl('/');
          this.votante=vot;
          this.myForm.reset({nombre: this.votante[0].nombre ,telefono: this.votante[0].telefono, domicilio: this.votante[0].domilio, 
          referenciadom: this.votante[0].referenciadom, seccion: this.votante[0].seccion, traslado: this.votante[0].traslado});

          this.urlId = this.votante[0].idpadre;
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

  updateVotante(){
    const votanteUpdate: VotanteUpdate = {
      'id_lider': this.votante[0].idpadre,
      'id_votante' : this.votante[0].id,
      'nombre':this.myForm.get('nombre')?.value,
      'telefono': this.myForm.get('telefono')?.value,
      'domicilio': this.myForm.get('domicilio')?.value,
      'refdomicilio': this.myForm.get('referenciadom')?.value,
      "cve_colonia": Number(this.votante[0].colonia),
      "seccion": this.myForm.get('seccion')?.value,
      "observaciones" : this.votante[0].observaciones,
      "traslado" : this.myForm.get('traslado')?.value,
      "inefrente": this.votante[0].inefrente,
      "ocr": this.votante[0].ocr,
      "programas" : this.votante[0].programas,
      'id_user':  Number( localStorage.getItem('idUsuario') ),
      'operacion': 'C'
    };

    this.structureService.UpdateVotanteById(votanteUpdate)
    .subscribe({
      next: () => {
          Swal.fire({
            icon: "success",
            title: "Actualizado",
            text: "Los datos del Votante se actualizaron",
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

    this.router.navigateByUrl(`dashboard/vlist/${this.urlId}`);
  }

}
