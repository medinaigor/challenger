import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AgencyFormPresenter } from './form-agency.presenter';
import { IAgencyForm } from '../../model/list-agencies.interfaces';

@Component({
    selector: 'app-form-agency',
    templateUrl: './form-agency.component.html',
    providers: [AgencyFormPresenter],
})

export class FormAgencyComponent implements OnChanges {

    @Input() agency: IAgencyForm;
    private id;

    @Output() dataForm: EventEmitter<IAgencyForm> = new EventEmitter<IAgencyForm>();

    constructor(public presenter: AgencyFormPresenter
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.agency.currentValue) {
            const data = changes.agency.currentValue;
            this.id = changes.agency.currentValue.id;
            this.presenter.setValueAgencyForm(data);
        }

    }

    onSubmit(): void {
        if (this.presenter.createformAgency.valid) {

            const obj: IAgencyForm = {
                id: this.id,
                agencia: this.presenter.ctrlagencia.value,
                direccion: this.presenter.ctrldireccion.value,
                distrito: this.presenter.ctrldistrito.value,
                lat: this.presenter.ctrllatitud.value,
                lon: this.presenter.ctrllongitud.value,
            };

            this.dataForm.emit(obj);
        }

    }

}
