import { Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:"", redirectTo:"home",pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"login",component:LoginPageComponent},
    {path:"registration",component:RegistrationPageComponent}
];
