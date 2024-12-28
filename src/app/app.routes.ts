import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StatesComponent } from './pages/states/states.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SspageComponent } from './pages/sspage/sspage.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'states', component: StatesComponent
    },
    {
        path: 'contact', component: ContactComponent
    },
    {
        path: 'states/:id', component: SspageComponent
    },
    { path: '**', component: NotFoundComponent }
];