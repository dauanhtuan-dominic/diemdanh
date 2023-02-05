import { NgModule } from '@angular/core';
import { AuthGuard } from 'src/app/@web-core/auth-guard.service';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module')
  //     .then(m => m.AuthModule),
  // },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule)
      // ,canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
