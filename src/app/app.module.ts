import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgencyComponent } from './agency/agency.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgencyService } from './agency/commons/http/agencies.services';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './agency/commons/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
// import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    AppComponent,
    AgencyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    ComponentsModule,
    // GoogleMapsModule
  ],
  providers: [AgencyService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
