import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';

const routes: Routes = [
  { path: '', component: LayoutMenuComponent, children: [
    // { path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    // { path: 'home', loadChildren: '../home/home.module#HomeModule' },
    // { path: 'about', loadChildren: '../about/about.module#AboutModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
