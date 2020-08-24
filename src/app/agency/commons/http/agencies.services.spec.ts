
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { EndPoints } from '../const/endpoint.enum';
import { AgencyService } from './agencies.services';
import { RouterTestingModule } from '@angular/router/testing';


describe('Prueba para el servicio AgencyService', () => {
    const dataMock = require('../../../../../mock-server/agencies.json');
    const url = `${environment.API_BASE}${EndPoints.getAllAgencies}`;

    let httpAgencyService: AgencyService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule.withRoutes([]),
            ],
            providers: [
                AgencyService,
            ],
        });

        httpAgencyService = TestBed.get(AgencyService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('El servicio AgencyService ha sido creado', () => {
        expect(httpAgencyService).toBeTruthy();
    });

    it('El api method debería ser GET', () => {
        httpAgencyService.getListAgencies().subscribe();
        const mockReq = httpMock.expectOne(url);
        expect(mockReq.request.method).toBe('GET');
    });

});
