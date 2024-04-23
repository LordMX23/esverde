import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoordinadorResponse } from '../interfaces/coordinador-response.interface';
import { catchError, Observable, of, tap } from 'rxjs';
import { LiderResponse } from '../interfaces/lider-response.interface';
import { VotanteResponse } from '../interfaces/votante-response.interface';
import { CoordinadorUpdate } from '../interfaces/coordinador-update.interface';

@Injectable({providedIn: 'root'})
export class StructureService {

    private readonly baseUrl: string = environment.baseUrl;
    private http = inject(HttpClient);

    constructor() { }

    // Coordinador
    getCoordinadorList(id : string,id_perfil: string, id_p: string ): Observable<CoordinadorResponse[]>
    {
        const url = `${this.baseUrl}/Registros/Top`;
        const token = localStorage.getItem('token');
        // const cordi: CoordinadorResponse = [];

        
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        
        const body = { id, id_perfil,id_p };
        //! id_perfil =  @id_perfil => (1= Coordinadores, 11=Lideres, 12=Votantes)
        //! id_p = la llave de la persona superior

        return this.http.post<CoordinadorResponse[]>(url, body, { headers })
        .pipe(
            catchError(() => {
                return of();
            })
        );
        

    }

    getCoordinadorById(id : string): Observable<CoordinadorResponse[]>
    {
        const url = `${this.baseUrl}/Registros/GetCoordinadorById?Id=${id.toString()}`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        

        return this.http.post<CoordinadorResponse[]>(url,'', { headers })
        .pipe(
            catchError(() => {
                return of();
            })
        );
        

    }

    UpdateCoordinadorById( coor: CoordinadorUpdate)
    {
        const url = `${this.baseUrl}/Registros/CoordinadorApp`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        
        const body = {
            'id_candidato' : coor.id_candidato,
            'nombre': coor.nombre,
            'telefono': coor.telefono,
            'inefrente': coor.inefrente,
            'ocr': coor.ocr,
            'id_user':  Number( localStorage.getItem('idUsuario') ),
            'operacion': coor.operacion,
            'id_coordinador': coor.id_coordinador
        };

        return this.http.post(url, body, { headers })
        .pipe(
            catchError(() => {
                return of('Se presento un error, contacte al administrador.');
            })
        );

    }


    // Lider
    getLider(id : string,id_perfil: string, id_p: string ): Observable<LiderResponse[]>
    {
        const url = `${this.baseUrl}/Registros/Top`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        const body = { id, id_perfil,id_p };

        return this.http.post<LiderResponse[]>(url, body, { headers })
        .pipe(
            catchError(() => {
                return of();
            })
        );
        

    }

    // Votante

    getVotante(id : string,id_perfil: string, id_p: string ): Observable<VotanteResponse[]>
    {
        const url = `${this.baseUrl}/Registros/Top`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        const body = { id, id_perfil,id_p };

        return this.http.post<VotanteResponse[]>(url, body, { headers })
        .pipe(
            catchError(() => {
                return of();
            })
        );
        

    }

    
    
}