export interface VotanteUpdate {
    id_lider:      number;
    id_votante:    number;
    nombre:        string;
    telefono:      string;
    domicilio:     string;
    refdomicilio:  string;
    cve_colonia:   number;
    seccion:       string;
    observaciones: string;
    traslado:      boolean;
    inefrente:     string;
    ocr:           string;
    programas:     string;
    id_user:       number;
    operacion:     string;
}