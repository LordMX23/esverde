import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CoordinadorResponse, PromovidoResponse } from '../interfaces/coordinador-response.interface';
import { catchError, Observable, of, tap } from 'rxjs';
import { LiderResponse } from '../interfaces/lider-response.interface';
import { VotanteResponse } from '../interfaces/votante-response.interface';
import { CoordinadorUpdate } from '../interfaces/coordinador-update.interface';
import { LiderUpdate } from '../interfaces/lider-update.interface';
import { VotanteUpdate } from '../interfaces/votante-update.interface';
import { VotanteTotalVotos } from '../interfaces/votante-total-votos.interface';
import { GetListaVotosResponse } from '../interfaces/get-lista-votos-response.interface';
import { GetPartidoVotosResponse } from '../interfaces/get-partido-votos-response.interface';
import { GetPartidoVotosSeccionResponse } from '../interfaces/get-partido-votos-seccion-response.interface';
import { GetEstructuraResponse } from '../interfaces/getEstructuraResponse.interface';
import { GetCatalogoResponse } from '../interfaces/getCatalogoResponse.interface';
import { PromovidoUpdateResponse } from '../interfaces/promovidoUpdateResponse.interface';
import { UserCreate } from '../interfaces/user-create.interface';
import { UserCreateResponse } from '../interfaces/user-create-response.interface';


@Injectable({providedIn: 'root'})
export class StructureService {

    private readonly baseUrl: string = environment.baseUrl;
    private http = inject(HttpClient);
    
    public isLoadingEstructura: boolean = false;
    public votantes: PromovidoResponse[] = [];

    constructor() { }

    //Crea Usuario
    CreateUser( user: UserCreate): Observable<UserCreateResponse[]>{
        const url = `${this.baseUrl}/Registros/RegistroUsuarioApp`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        const body = user;

        return this.http.post<UserCreateResponse[]>(url, body, { headers })
        .pipe(
                catchError((error) => {
                    throw `Error: ${error.toString()}`;
                })
            );
    }


    // Total de miembros registrados y cuantos han votado
    getVotanteTotalVotos(): Observable<VotanteTotalVotos[]>{
        const url = `${this.baseUrl}/Registros/GetVotante_Total_Votos`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.post<VotanteTotalVotos[]>(url,'', { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );
    }

    // Conteo rapido , grafica por partido
    getPartidoVotos(): Observable<GetPartidoVotosResponse[]>{
        const url = `${this.baseUrl}/Registros/GetPartidoVotos`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.post<GetPartidoVotosResponse[]>(url,'', { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );
    }

    // Consulta de estructura y reportes de cuantos han votado
    getEstructura(idTipo : number, IdPersona: number, texto: string): Observable<GetEstructuraResponse[]>{
        const url = `${this.baseUrl}/Registros/GetEstructura?idTipo=${idTipo.toString()}&IdPersona=${IdPersona.toString()}&texto=${texto.toString()}`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.post<GetEstructuraResponse[]>(url,'', { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );

    }

    // Trae catalogo
    getCatalogoSinParametro(Tipo: number): Observable<GetCatalogoResponse[]>{
        const url = `${this.baseUrl}/Registros/GetCatalogo?Tipo=${Tipo.toString()}`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.post<GetCatalogoResponse[]>(url,'', { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );
    }

    // Actualiza Votante (Promovido)
    UpdateVotante( votante: PromovidoUpdateResponse){
        const url = `${this.baseUrl}/Registros/Promovido_Update`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        const body = votante;

        return this.http.post(url, body, { headers })
        .pipe(
                catchError((error) => {
                    throw `Error: ${error.toString()}`;
                })
            );
    }

    // Trae votante para actualizar
    getVotanteByName(name: string){
        this.isLoadingEstructura = true;
        
        if(name.length===0){
            name = 'zzzzzz';
        }
        const url = `${this.baseUrl}/Registros/GetEstructura?idTipo=6&IdPersona=0&texto=${name.toString()}`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        this.http.post<PromovidoResponse[]>(url,'', { headers })
        .subscribe( response => {
            this.isLoadingEstructura = false;
            this.votantes = response
        })
    }




////////////////////////////////




    // UpdateVotanteById( votante: PromovidoResponse)
    // {
        // const url = `${this.baseUrl}/Registros/VotanteApp`;
        // const token = localStorage.getItem('token');
        // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        // const body = {
        //     'id_lider': vot.id_lider,
        //     'id_votante' : vot.id_votante,
        //     'nombre': vot.nombre,
        //     'telefono': vot.telefono,
        //     'domicilio': vot.domicilio,
        //     'refdomicilio': vot.refdomicilio,
        //     "cve_colonia": vot.cve_colonia,
        //     "seccion": vot.seccion,
        //     "observaciones" : vot.observaciones,
        //     "traslado" : true,
        //     "inefrente": vot.inefrente,
        //     "ocr": vot.ocr,
        //     "programas" : vot.programas,
        //     'id_user':  Number( localStorage.getItem('idUsuario') ),
        //     'operacion': vot.operacion
        // };

        // console.log(url);
        // console.log(body);
        // console.log(headers);
        

        // return this.http.post(url, body, { headers })
        // .pipe(
        //     catchError((error) => {
        //         throw `Error: ${error.toString()}`;
        //     })
        // );
    //}


    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////

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

    // UpdateVotanteById( vot: VotanteUpdate)
    // {
    //     const url = `${this.baseUrl}/Registros/VotanteApp`;
    //     const token = localStorage.getItem('token');
    //     const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    //     const body = {
    //         'id_lider': vot.id_lider,
    //         'id_votante' : vot.id_votante,
    //         'nombre': vot.nombre,
    //         'telefono': vot.telefono,
    //         'domicilio': vot.domicilio,
    //         'refdomicilio': vot.refdomicilio,
    //         "cve_colonia": vot.cve_colonia,
    //         "seccion": vot.seccion,
    //         "observaciones" : vot.observaciones,
    //         "traslado" : true,
    //         "inefrente": vot.inefrente,
    //         "ocr": vot.ocr,
    //         "programas" : vot.programas,
    //         'id_user':  Number( localStorage.getItem('idUsuario') ),
    //         'operacion': vot.operacion
    //     };

    //     console.log(url);
    //     console.log(body);
    //     console.log(headers);
        

    //     return this.http.post(url, body, { headers })
    //     .pipe(
    //         catchError((error) => {
    //             throw `Error: ${error.toString()}`;
    //         })
    //     );
    // }

    

    getListaVotos(tipo: number, id: number): Observable<GetListaVotosResponse[]>{
        const url = `${this.baseUrl}/Registros/GetListaVotos?Tipo=${tipo}&id=${id}`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);


        return this.http.post<GetListaVotosResponse[]>(url,'', { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );
    }

    

    getPartidoVotosSeccion(id: number): Observable<GetPartidoVotosSeccionResponse[]>{
        const url = `${this.baseUrl}/Registros/GetPartidoVotosSeccion?Id_Partido=${id}`;
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        return this.http.post<GetPartidoVotosSeccionResponse[]>(url,'', { headers })
        .pipe(
            catchError((error) => {
                throw `Error: ${error.toString()}`;
            })
        );
    }
    
}