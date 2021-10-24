import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthInsuranseComponent } from './containers/health-insuranse/health-insuranse.component';
import { DoctorComponent } from './containers/doctor/doctor.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorAddComponent } from './components/doctor-add/doctor-add.component';
import { DoctorEditComponent } from './components/doctor-edit/doctor-edit.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { HealhInsuranseAddComponent } from './components/healh-insuranse-add/healh-insuranse-add.component';
import { HealhInsuranseEditComponent } from './components/healh-insuranse-edit/healh-insuranse-edit.component';
import { HealhInsuranseListComponent } from './components/healh-insuranse-list/healh-insuranse-list.component';



@NgModule({
  declarations: [
    HealthInsuranseComponent,
    DoctorComponent,
    DoctorAddComponent,
    DoctorEditComponent,
    DoctorListComponent,
    HealhInsuranseAddComponent,
    HealhInsuranseEditComponent,
    HealhInsuranseListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    SharedModule,
  ],
  exports:[HealthInsuranseComponent, DoctorComponent]
})
export class ConfiguratorModule { }
