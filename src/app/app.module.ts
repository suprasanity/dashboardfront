import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingComponent } from './landing/landing.component';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {FlatpickrModule} from "angularx-flatpickr";
import {DateAdapter} from "@angular/material/core";
import {CalendarModule} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/moment";
import { AboutmeComponent } from './aboutme/aboutme.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://chovy.freeboxos.fr:9989/auth',
        realm: 'Yann',
        clientId: 'dashboard'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    AboutmeComponent,
    CalendrierComponent,

  ],
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule,
    CalendarModule,
    AppComponent,
    NavbarComponent,
    LandingComponent,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
