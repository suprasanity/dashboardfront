import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    AboutmeComponent,
    CalendrierComponent,

  ],
  imports: [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
