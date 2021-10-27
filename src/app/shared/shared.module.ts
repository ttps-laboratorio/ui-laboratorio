import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderModule } from './header/header.module';
import { SidebarConfiguratorComponent } from './sidebar-configurator/sidebar-configurator.component';
import { SidebarAdministratorComponent } from './sidebar-administrator/sidebar-administrator.component';
import { FooterComponent } from './footer/footer.component';
import { SettingsMenuComponent } from './ui-elements/settings-menu/settings-menu.component';
import { DateMenuComponent } from './ui-elements/date-menu/date-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarEmployeeComponent } from './sidebar-employee/sidebar-employee.component';
import { MatDialogModule } from '@angular/material/dialog';
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
    FlexLayoutModule,
  ],
  exports: [
    HeaderModule,
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
