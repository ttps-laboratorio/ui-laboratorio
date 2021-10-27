import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderModule } from '../shared/header/header.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LayoutMenuComponent,
    HomeComponent
  ],
  imports: [
    FontAwesomeModule,
    HeaderModule,
    RouterModule,
    FormsModule,
    CommonModule,
    SharedModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
