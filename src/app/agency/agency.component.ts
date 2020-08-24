import { Component, OnInit } from '@angular/core';
import { AgencyService } from './commons/http/agencies.services';
import { IListAgency, IAgencyForm } from './commons/model/list-agencies.interfaces';
import { AgencyFormPresenter } from './commons/components/form-agency/form-agency.presenter';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
  providers: [AgencyFormPresenter]
})
export class AgencyComponent implements OnInit {

  showList = true;
  listAgencies: IListAgency[];
  form: IAgencyForm = {
    id: 0,
    agencia: '',
    direccion: '',
    distrito: '',
    lat: 0,
    lon: 0
  };

  constructor(private service: AgencyService
  ) { }

  ngOnInit() {
    this.getListAgencies();
  }

  getListAgencies() {

    this.service.getListAgencies().subscribe((result) => {

      this.listAgencies = result;
      // tslint:disable-next-line: only-arrow-functions
      this.listAgencies.forEach((item) => {
        item.imagen = String(Math.floor(Math.random() * (8 - 1 + 1) + 1));
      });
      this.validateSetData(this.listAgencies);

    }, (error) => {
      console.log(error);
    }
    );
  }

  getDetail(value) {
    const obj: IAgencyForm = {
      id: value.id,
      agencia: value.agencia,
      direccion: value.direccion,
      distrito: value.distrito,
      lat: value.lat,
      lon: value.lon,
    };
    this.showList = false;
    this.form = obj;
  }

  validateSetData(list: IListAgency[]) {
    if (localStorage.getItem('tembcp') === null) {

      localStorage.setItem('tembcp', JSON.stringify(list));

    }
  }

  saveForm(dataForm: IAgencyForm) {
    this.showList = true;

    this.listAgencies.forEach((item) => {
      if (item.id === dataForm.id) {
        item.agencia = dataForm.agencia;
        item.direccion = dataForm.direccion;
        item.distrito = dataForm.distrito;
        item.lon = dataForm.lon;
        item.lat = dataForm.lat;
      }
    });

  }



}
