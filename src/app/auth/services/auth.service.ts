import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { LoginResponse } from '../interfaces/login-response.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject(HttpClient);

  // private _currentUser = signal<User|null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //! Al mundo exterior
  // public currentUser = computed( () => this._currentUser() );
  public authStatus = computed(() => this._authStatus());


  constructor() {
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: LoginResponse): boolean {

    this._authStatus.set(AuthStatus.authenticated);

    localStorage.setItem('idUsuario', user.idUsuario);
    localStorage.setItem('idperfil', user.idperfil);
    localStorage.setItem('nombre', user.nombre);
    localStorage.setItem('token', user.token);

    return true;
  }


  login(cu_user: string, cu_Pass: string): Observable<boolean> {

    const url = `${this.baseUrl}/Authenticate/authenticatefrontend`;
    const body = { cu_user, cu_Pass, token: '' };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(user => {
          if (user.idUsuario === '0') {
            return false;
          }
          else {
            this.setAuthentication(user);
            return true;
          }
        }),
        catchError(err => throwError(() => err.error.message))
      );
  }



  checkAuthStatus(): Observable<boolean> {

    const url = `${this.baseUrl}/Registros/CheckAuthenticate`;
    const token = localStorage.getItem('token');

    if (!token) {
      this.logout();
      return of(false);
    }

    //! Headers
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);


    const idUsuario = localStorage.getItem('idUsuario');
    const idperfil = localStorage.getItem('idperfil');
    const nombre = localStorage.getItem('nombre');


    return this.http.post<boolean>(url, '', { headers })
      .pipe(
        map(hoy => {
          if (idUsuario && idperfil && nombre) {
            const user: LoginResponse = {
              idUsuario: idUsuario
              , token: token
              , idperfil: idperfil
              , nombre: nombre
            };
            this.setAuthentication(user);
            return true;
          }
          return false;
        }),
        catchError(() => {
          this._authStatus.set(AuthStatus.notAuthenticated);
          return of(false);
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    //this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }

}