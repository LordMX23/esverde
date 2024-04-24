import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoordinadorResponse } from '../interfaces/coordinador-response.interface';
import { catchError, Observable, of, tap } from 'rxjs';
import { LiderResponse } from '../interfaces/lider-response.interface';
import { VotanteResponse } from '../interfaces/votante-response.interface';
import { CoordinadorUpdate } from '../interfaces/coordinador-update.interface';
import { LiderUpdate } from '../interfaces/lider-update.interface';
import { VotanteUpdate } from '../interfaces/votante-update.interface';

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
            catchError((error) => {
                throw `Error: ${error.toString()}`;
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
            catchError((error) => {
                throw `Error: ${error.toString()}`;
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
            catchError((error) => {
                throw `Error: ${error.toString()}`;
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
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );
    }

    getLiderById(id : string): Observable<LiderResponse[]>
    {
        
        const url = `${this.baseUrl}/Registros/GetLiderById?Id=${id.toString()}`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.post<LiderResponse[]>(url,'', { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );
    }

    UpdateLiderById( lid: LiderUpdate)
    {
        const url = `${this.baseUrl}/Registros/LiderApp`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        
        const body = {
            'id_coordinador' : lid.id_coordinador,
            'nombre': lid.nombre,
            'telefono': lid.telefono,
            'domicilio': lid.domicilio,
            'referenciadom': lid.referenciadom,
            "cve_colonia": lid.cve_colonia,
            "seccion": lid.seccion,
            "inefrente": lid.inefrente,
            "ocr": lid.ocr,
            'id_user':  Number( localStorage.getItem('idUsuario') ),
            'operacion': lid.operacion,
            'id_lider': lid.id_lider
        };

        return this.http.post(url, body, { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
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

        console.log("votante1");

        return this.http.post<VotanteResponse[]>(url, body, { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );
    }

    getVotanteById(id : string): Observable<VotanteResponse[]>
    {
        const url = `${this.baseUrl}/Registros/GetVotanteById?Id=${id.toString()}`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.post<VotanteResponse[]>(url,'', { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );
    }

    UpdateVotanteById( vot: VotanteUpdate)
    {
        const url = `${this.baseUrl}/Registros/VotanteApp`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        const body = {
            'id_lider': vot.id_lider,
            'id_votante' : vot.id_votante,
            'nombre': vot.nombre,
            'telefono': vot.telefono,
            'domicilio': vot.domicilio,
            'refdomicilio': vot.refdomicilio,
            "cve_colonia": vot.cve_colonia,
            "seccion": vot.seccion,
            "observaciones" : vot.observaciones,
            "traslado" : true,
            "inefrente": vot.inefrente,
            "ocr": vot.ocr,
            "programas" : vot.programas,
            'id_user':  Number( localStorage.getItem('idUsuario') ),
            'operacion': vot.operacion
        };

        console.log(url);
        console.log(body);
        console.log(headers);
        

        return this.http.post(url, body, { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );
    }

    
    
}