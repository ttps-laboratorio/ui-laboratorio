import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';

const routes: Routes = [
  { path: '', component: LayoutMenuComponent, children: [
    // { path: 'admin', loadChildren: '../admin/admin.module#AdminModule'},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'health-insurance', loadChildren: () => import('./health-insurance/health-insurance.module').then(m => m.HealthInsuranceModule)},
    { path: 'doctor', loadChildren: () => import('./referring-doctor/referring-doctor.module').then(m => m.ReferringDoctorModule)},
    { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
    { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)},
    { path: 'study', loadChildren: () => import('./study/study.module').then(m => m.StudyModule)},
    { path: 'sample-batch', loadChildren: () => import('./sample-batch/sample-batch.module').then(m => m.SampleBatchModule)},
    // { path: 'home', loadChildren: '../home/home.module#HomeModule' },
    // { path: 'about', loadChildren: '../about/about.module#AboutModule' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
