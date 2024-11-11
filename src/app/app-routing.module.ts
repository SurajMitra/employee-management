import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponentComponent },
  { path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
