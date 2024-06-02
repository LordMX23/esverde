import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StructureService } from '../../services/structure.service';
import { GetCatalogoResponse } from '../../interfaces/getCatalogoResponse.interface';
import { UserCreate } from '../../interfaces/user-create.interface';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styles: ``
})
export class UserCreateComponent {

  private fb = inject(FormBuilder);
  private structureService = inject(StructureService);

  public catRoles: GetCatalogoResponse[] = [];


  public myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    paterno: ['', [Validators.required, Validators.minLength(3)]],
    materno: ['', [Validators.required, Validators.minLength(3)]],
    nusuario: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rolId: ['', [Validators.required]],
  });

  constructor() {
    this.structureService.getCatalogoSinParametro(2)
      .subscribe(cat => this.catRoles = cat);
  }

  createUser(){
    const idUsuario = localStorage.getItem('idUsuario');

    const userCreate: UserCreate = {
      'rolid': this.myForm.get('rolId')?.value,
      'usuario': this.myForm.get('nusuario')?.value,
      'nombre': this.myForm.get('nombre')?.value,
      'paterno': this.myForm.get('paterno')?.value,
      'materno': this.myForm.get('materno')?.value,
      "password": this.myForm.get('password')?.value,
      'idusercrea': Number(idUsuario),
    };


    this.structureService.CreateUser(userCreate)
      .subscribe({
        next: (result) => {
          console.log(result[0]);
          if (result[0].msg === "usuario ya existe"){
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Usuario existente",
              footer: ''
            });
          } 
          else {
            this.myForm.reset(),

          Swal.fire({
            icon: "success",
            title: "Correcto",
            text: "Usuario creado correctamente",
            footer: ''
          });

        
          }
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
