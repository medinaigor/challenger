import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EndPoints } from '../const/endpoint.enum';
import { IListAgency, IListAgencyResponse } from '../model/list-agencies.interfaces';

@Injectable()
export class AgencyService {

    constructor(private http: HttpClient
    ) { }

    getListAgencies(): Observable<IListAgency[]> {
        const url = `${environment.API_BASE}${EndPoints.getAllAgencies}`;

        return this.http.get<IListAgencyResponse>(url)
            .pipe(
                map(response => {
                    const listAgency: IListAgency[] = response.listAgencies.map((data, index) => {
                        return {
                            id: index + 1,
                            agencia: data.agencia,
                            distrito: data.distrito,
                            provincia: data.provincia,
                            departamento: data.departamento,
                            direccion: data.direccion,
                            lat: data.lat,
                            lon: data.lon,
                            imagen: ''
                        };
                    });
                    return listAgency;
                }),
            );
    }
}
