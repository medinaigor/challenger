import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
})

export class MapComponent implements OnInit {

    @Input() lat: number;
    @Input() lon: number;

    title = 'Ubicacion de Agencias bcp';
    position = { lat: this.lat, lng: this.lon }; //  lat: -11.990757, lng: -77.07969 
    zoom = 15;
    label = { color: 'red' , text: 'marcador'};

    ngOnInit(): void {

    }

}
