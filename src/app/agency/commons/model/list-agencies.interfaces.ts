export interface IListAgency {
    id: number;
    agencia: string;
    distrito: string;
    provincia: string;
    departamento: string;
    direccion: string;
    lat: number;
    lon: number;
    imagen: string;
}

export interface IListAgencyResponse {
    listAgencies: IListAgency[];
}

export interface IAgencyForm {
    id: number;
    agencia: string;
    direccion: string;
    distrito: string;
    lat: number;
    lon: number;
}

