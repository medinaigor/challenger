import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { IAgencyForm, IListAgency } from '../../model/list-agencies.interfaces';

@Injectable()
export class AgencyFormPresenter {

    data: IListAgency[];

    ctrlagencia = new FormControl('', [Validators.required]);
    ctrldireccion = new FormControl('', [Validators.required]);
    ctrldistrito = new FormControl('', [Validators.required]);
    ctrllongitud = new FormControl('', [Validators.required]);
    ctrllatitud = new FormControl('', [Validators.required]);

    createformAgency: FormGroup = new FormGroup({
        ctrlagencia: this.ctrlagencia,
        ctrldireccion: this.ctrldireccion,
        ctrldistrito: this.ctrldistrito,
        ctrllongitud: this.ctrllongitud,
        ctrllatitud: this.ctrllatitud
    });

    constructor() {
        this.createformAgency.valueChanges.subscribe((val) => console.log('changes', val));
    }

    setValueAgencyForm(data: IAgencyForm) {
        const form = {
            ctrlagencia: data.agencia,
            ctrldireccion: data.direccion,
            ctrldistrito: data.distrito,
            ctrllongitud: data.lon,
            ctrllatitud: data.lat
        };

        this.createformAgency.patchValue(form);
    }


}
