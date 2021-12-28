import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AuthGuard} from './pages/auth/guards';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {
    path: 'app', canActivate: [AuthGuard], data: { permissions: ["ROLE_EMPLOYEE", "ROLE_CONFIGURATOR", "ROLE_ADMINISTRATOR", "ROLE_PATIENT"] }, loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule)
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
