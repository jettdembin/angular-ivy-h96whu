import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent, HelloComponent, DashboardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
