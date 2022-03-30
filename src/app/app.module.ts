import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component'

const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, FormComponent, DashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
