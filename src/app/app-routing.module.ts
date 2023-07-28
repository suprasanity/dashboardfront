import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AboutmeComponent} from "./aboutme/aboutme.component";
import {LandingComponent} from "./landing/landing.component";
import {CalendrierComponent} from "./calendrier/calendrier.component";
import {AuthGuard} from "./authGuard";

const routes: Routes = [
  // /calendar will load the CalendarComponent
  {path:'about', component: AboutmeComponent,canActivate: [AuthGuard]
  },

  {path:'calendrier', component: CalendrierComponent,canActivate: [AuthGuard]},
  // /home will load the LandingComponent
  {path:'home', component: LandingComponent,canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full',canActivate: [AuthGuard]},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

