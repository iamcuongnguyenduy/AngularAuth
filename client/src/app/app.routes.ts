import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component'),
  },
  {
    path: 'product',
    canActivate: [authGuard],
    loadComponent: () => import('./modules/product/product-demo/product-demo.component'),
  },
  {
    path: 'forgetpassword',
    loadComponent: () =>
      import('./pages/forgetpassword/forgetpassword.component'),
  },
  {
    path: 'resetpassword',
    loadComponent: () =>
      import('./pages/resetpassword/resetpassword.component'),
  },
  { path: 'home', canActivate: [authGuard], loadComponent: () => import('./pages/home/home.component') },
  { path: 'role', canActivate: [authGuard], loadComponent: () => import('./modules/admin/role/role.component') },
  {
    path: '**',
    loadComponent: () => import('./components/not-found/not-found.component'),
  },
];
