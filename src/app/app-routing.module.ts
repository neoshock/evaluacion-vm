import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthordetailsComponent } from './authordetails/authordetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'author/:name', component: AuthordetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
