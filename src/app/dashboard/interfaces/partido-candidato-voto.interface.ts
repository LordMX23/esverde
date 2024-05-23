export interface PartidoCandidatoVoto{
    partido:     string;
    candidato:     string;
    votos: number;
    id_Partido: number;
}

export interface SingleVotos{
    name:  string;
    value: number;
}

export interface VotosFaltantes{
    cantidad: number;
}