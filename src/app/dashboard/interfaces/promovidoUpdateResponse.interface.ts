export interface PromovidoUpdateResponse {
    id_promotor:  number;
    id_promovido: number | null;
    nombre:       string;
    apellidos:    string;
    telefono:     string;
    seccion:      string;
    voto:         boolean;
    traslado:     boolean;
}
