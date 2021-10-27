import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from '../shared/header/header.module';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LayoutMenuComponent,
    HomeComponent
  ],
  imports: [
    FlexLayoutModule,
    FontAwesomeModule,
    HeaderModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    CommonModule,
    SharedModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
