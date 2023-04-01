import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignupPageComponent } from './auth/signup-page/signup-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PortalHomeComponent } from './portal/portal-home/portal-home.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'portalHome', component: PortalHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
