import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {
  constructor(){}

  private fb          = inject( FormBuilder );
  private authService = inject( AuthService );
  private router      = inject( Router )
  private http        = inject( HttpClient );


  public myForm: FormGroup = this.fb.group({
    usuario:    ['prueba', [ Validators.required, Validators.minLength(3) ]],
    password: ['prueba89', [ Validators.required, Validators.minLength(6) ]],
  });

  login(){
    const { usuario, password } = this.myForm.value;

    this.authService.login(usuario, password)
      .subscribe({
        next: bol => {
          if(bol === false){
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Contraseña incorrecta o acceso denegado",
              footer: ''
            });
          }
          if(bol === true){
            this.router.navigateByUrl('/dashboard')
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
      })

  }

}
