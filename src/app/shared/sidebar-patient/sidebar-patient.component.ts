import { Component } from '@angular/core';
import { routes } from '../../consts/routes';
import { faUserMd, faPlusSquare, faCalendarAlt, faFileMedical } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-patient',
  templateUrl: './sidebar-patient.component.html',
  styleUrls: ['./sidebar-patient.component.scss']
})
export class SidebarPatientComponent {
  public routes: typeof routes = routes;
  public isOpenUiElements = false;
  public faUserMd = faUserMd;
  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
