export interface CoordinadorResponse {
    id_coordinador_municipal: number;
    cmNombre:                 string;
    cmTelefono:               string;
    cmSeccion:                string;
    cm_colonia:               number;
}

export interface CoordinadorZonaResponse {
    id_coordinador_zona:      number;
    czNombre:                 string;
    czTelefono:               string;
    czSeccion:                string;
    cz_colonia:               number;
}

export interface CoordinadorSeccionResponse {
    id_coordinador_seccion:   number;
    csNombre:                 string;
    csTelefono:               null | string;
    csSeccion:                string;
    cs_colonia:               number | null;
}

export interface PromotorResponse {
    id_promotor:              number | null;
    pNombre:                  null | string;
    pTelefono:                null | string;
    pSeccion:                 null | string;
    p_colonia:                number | null;
}

export interface PromovidoResponse {
    id_promotor:              number | null;
    id_promovido:             number | null;
    vNombre:                  null | string;
    vApellidos:               null | string;
    vSeccion:                 null | string;
    vTelefono:                null | string;
    v_colonia:                number | null;
    voto:                     boolean | null;
    vVoto:                    string;
    traslado:                 boolean | null;
    vTraslado:                string;
}



// export interface GetEstructuraResponse {
//     rowNum:                   number;
//     id_coordinador_municipal: number;
//     cmNombre:                 string;
//     cmTelefono:               string;
//     cmSeccion:                string;
//     cm_colonia:               number;
//     id_coordinador_zona:      number;
//     czNombre:                 string;
//     czTelefono:               string;
//     czSeccion:                string;
//     cz_colonia:               number;
//     id_coordinador_seccion:   number;
//     csNombre:                 string;
//     csTelefono:               null | string;
//     csSeccion:                string;
//     cs_colonia:               number | null;
//     id_promotor:              number | null;
//     pNombre:                  null | string;
//     pTelefono:                null | string;
//     pSeccion:                 null | string;
//     p_colonia:                number | null;
//     id_promovido:             number | null;
//     vNombre:                  null | string;
//     vSeccion:                 null | string;
//     vTelefono:                null | string;
//     v_colonia:                number | null;
//     voto:                     string;
//     traslado:                 boolean | null;
//     vTraslado:                string;
// }