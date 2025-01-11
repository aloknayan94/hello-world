import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'landing'
    },
    {
        path: 'landing',
        component: LandingPageComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }

];
