import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basics',
    title: 'Pipes comúnes',
    loadComponent: ()=> import('./pages/basic-page/basic-page'),
  },
  {
    path: 'numbers',
    title: 'Pipes numericos',
    loadComponent: ()=> import('./pages/number-page/number-page'),
  },
  {
    path: 'uncommon',
    title: 'Pipes poco comúnes',
    loadComponent: ()=> import('./pages/uncommon-page/uncommon-page'),
  },
  {
    path: 'custom',
    title: 'Pipes personalizados',
    loadComponent: ()=> import('./pages/custom-page/custom-page'),
  },
  {
    path: '**',
    redirectTo: 'basics'
  }
];
