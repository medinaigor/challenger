import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormAgencyComponent } from './form-agency/form-agency.component';
import { MapComponent } from './map/map.component';
// import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    FormAgencyComponent,
    // MapComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    // GoogleMapsModule
  ],
  exports: [
    FormAgencyComponent,
    // MapComponent

  ],
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
      providers: [],
    };
  }
}

