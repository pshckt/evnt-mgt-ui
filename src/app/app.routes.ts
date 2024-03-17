import { Routes } from '@angular/router';

import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { SearchEventComponent } from './components/search-event/search-event.component';
import { DisplayEventsComponent } from './components/display-events/display-events.component';
import { DisplayVenuesComponent } from './components/display-venues/display-venues.component';
import { OrganizerHomeComponent } from './components/organizer-home/organizer-home.component';

export const routes: Routes = [
    {path:"", redirectTo:"home",pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"login",component:LoginPageComponent},
    {path:"registration",component:RegistrationPageComponent},
    {path:"events",component:EventComponent},
    {path:"searchEvent",component:SearchEventComponent},
    {path:"eventsApproval",component:DisplayEventsComponent},
    {path:"details",component:DisplayVenuesComponent},
    {path:"organizerHome",component:OrganizerHomeComponent},
    {path:"registerEvent", component:EventComponent}

];
