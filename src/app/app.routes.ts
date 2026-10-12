import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('../home/home').then(m => m.Home),
  },
  {
    path: 'catalogue',
    loadComponent: () => import('../formation-catalog/formation-catalog').then(m => m.FormationCatalog),
  },
  {
    path: 'formations/create',
    loadComponent: () => import('../create-formation/create-formation').then(m => m.CreateFormation),
  },
  {
    path: 'formation/:id',
    loadComponent: () => import('../formation-detail/formation-detail').then(m => m.FormationDetail),
  },
  { path: '**', redirectTo: 'home' },
];
