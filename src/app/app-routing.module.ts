import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutmeComponent} from "./aboutme/aboutme.component";
import {LandingComponent} from "./landing/landing.component";
import {CalendrierComponent} from "./calendrier/calendrier.component";

const routes: Routes = [
  // /calendar will load the CalendarComponent
  {path:'about', component: AboutmeComponent},
  {path:'calendrier', component: CalendrierComponent},
  // /home will load the LandingComponent
  {path:'home', component: LandingComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

