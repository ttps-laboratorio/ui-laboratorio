import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderModule } from './header/header.module';
import { SidebarConfiguratorComponent } from './sidebar-configurator/sidebar-configurator.component';
import { SidebarAdministratorComponent } from './sidebar-administrator/sidebar-administrator.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';
import { DateMenuComponent } from './ui-elements/date-menu/date-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarEmployeeComponent } from './sidebar-employee/sidebar-employee.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    SidebarConfiguratorComponent,
    SidebarAdministratorComponent,
    SidebarEmployeeComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
  ],
  imports: [
    FontAwesomeModule,
    HeaderModule,
    MaterialModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  exports: [
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarConfiguratorComponent,
    SidebarEmployeeComponent,
    SidebarAdministratorComponent,
    FooterComponent,
    SettingsMenuComponent,
    DateMenuComponent,
    MaterialModule,
    FlexLayoutModule,
    SuccessDialogComponent,
    ErrorDialogComponent,
  ],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent
  ]
})
export class SharedModule { }
