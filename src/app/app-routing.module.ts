import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutmeComponent} from "./aboutme/aboutme.component";
import {LandingComponent} from "./landing/landing.component";

const routes: Routes = [
  // /calendar will load the CalendarComponent
  {path:'about', component: AboutmeComponent},
  // /home will load the LandingComponent
  {path:'home', component: LandingComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

