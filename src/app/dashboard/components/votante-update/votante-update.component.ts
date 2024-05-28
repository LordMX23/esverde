import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PromovidoUpdateResponse } from '../../interfaces/promovidoUpdateResponse.interface';
import { StructureService } from '../../services/structure.service';
import Swal from 'sweetalert2'
import { GetCatalogoResponse } from '../../interfaces/getCatalogoResponse.interface';
import { PromovidoResponse } from '../../interfaces/coordinador-response.interface';

@Component({
  selector: 'app-votante-update',
  templateUrl: './votante-update.component.html',
  styles: ``
})
export class VotanteUpdateComponent implements OnChanges {

  @Input() votante: PromovidoResponse[] = [];

  private fb = inject(FormBuilder);
  private structureService = inject(StructureService);

  public catPromotores: GetCatalogoResponse[] = [];
  color = 'accent';
  checked = false;
  disabled = false;

  public myForm: FormGroup = this.fb.group({
    idpromotor: ['', [Validators.required]],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['',],
    telefono: ['', [Validators.required, Validators.minLength(10)]],
    seccion: ['', [Validators.required, Validators.minLength(4)]],
    voto: [{ value: false }],
    traslado: [{ value: false }],
  });

  constructor() {
    this.structureService.getCatalogoSinParametro(1)
      .subscribe(cat => this.catPromotores = cat);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.LlenaVotante();
  }

  LlenaVotante() {
    this.myForm.reset(
      {
        idpromotor: this.votante[0].id_promotor, nombre: this.votante[0].vNombre, apellidos: this.votante[0].vApellidos
        , telefono: this.votante[0].vTelefono, seccion: this.votante[0].vSeccion
        , voto: this.votante[0].voto, traslado: this.votante[0].traslado
      }
    );

  }



  updateVotante() {
    const votanteUpdate: PromovidoUpdateResponse = {
      'id_promotor': this.myForm.get('idpromotor')?.value,
      'id_promovido': this.votante[0].id_promovido,
      'nombre': this.myForm.get('nombre')?.value,
      'apellidos': this.myForm.get('apellidos')?.value,
      'telefono': this.myForm.get('telefono')?.value,
      'seccion': this.myForm.get('seccion')?.value,
      "voto": this.myForm.get('voto')?.value,
      "traslado": this.myForm.get('traslado')?.value,
    };

    this.structureService.UpdateVotante(votanteUpdate)
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

}
