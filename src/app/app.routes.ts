import { Routes } from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {PublicComponent} from './public/public.component';

export const routes: Routes = [
  { path: '', component: PublicComponent },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
