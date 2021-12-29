import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';

const routes: Routes = [
  { path: '', component: LayoutMenuComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'health-insurance', loadChildren: () => import('./health-insurance/health-insurance.module').then(m => m.HealthInsuranceModule)},
    { path: 'doctor', loadChildren: () => import('./referring-doctor/referring-doctor.module').then(m => m.ReferringDoctorModule)},
    { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)},
    { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)},
    { path: 'study', loadChildren: () => import('./study/study.module').then(m => m.StudyModule)},
    { path: 'report', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)},
    { path: 'sample-batch', loadChildren: () => import('./sample-batch/sample-batch.module').then(m => m.SampleBatchModule)},
    { path: 'unpaid-extraction', loadChildren: () => import('./unpaid-extraction/unpaid-extraction.module').then(m => m.UnpaidExtractionModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
