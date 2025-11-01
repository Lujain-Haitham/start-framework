import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ProtfolioComponent } from './component/protfolio/protfolio.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path:'home',
        component:HomeComponent,
        title:'home',
        pathMatch: 'full'
    },
    {
        path:'about',
        title:'about',
        component:AboutComponent
    },
    {
        path:'portfolio',
        title:'portfolio',
        component:ProtfolioComponent
    },
    {
        path:'contact',
        title:'contact',
        component:ContactComponent
    },
    {
        path:'not-found',
        title:'404',
        component:NotFoundComponent
    },
    {
        path:'**',
        redirectTo:'not-found'
        
    }
];
