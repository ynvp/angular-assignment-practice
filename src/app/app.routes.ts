import { Routes } from '@angular/router';
import { Assignment2Component } from './components/assignment2/assignment2.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'contactUs', component: ContactUsComponent },
    { path: 'users', component: Assignment2Component },
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent },
];
