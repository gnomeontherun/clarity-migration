import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'alert', component: AlertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
