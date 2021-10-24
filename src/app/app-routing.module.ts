import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard/containers';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AuthGuard} from './pages/auth/guards';
import { HealthInsuranseComponent } from './pages/configurator/containers/health-insuranse/health-insuranse.component';
import { DoctorComponent } from './pages/configurator/containers/doctor/doctor.component';

const routes: Routes = [
  {
    path: 'health-insuranse',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { permissions: ["ROLE_CONFIGURATOR"] },
    component: HealthInsuranseComponent
  },
  {
    path: 'doctor',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { permissions: ["ROLE_CONFIGURATOR"] },
    component: DoctorComponent
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: { permissions: ["ROLE_EMPLOYEE", "ROLE_CONFIGURATOR", "ROLE_ADMINISTRATOR"] },
    component: DashboardPageComponent
  },
  // {
  //   path: 'tables',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule)
  // },
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
