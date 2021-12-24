import { Component } from '@angular/core';
import { routes } from '../../consts/routes';
import { faUserMd, faPlusSquare, faBars, faCalendarAlt, faFileMedical } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar-employee',
  templateUrl: './sidebar-employee.component.html',
  styleUrls: ['./sidebar-employee.component.scss']
})
export class SidebarEmployeeComponent {
  public routes: typeof routes = routes;
  public isOpenUiElements = false;
  public faUserMd = faUserMd;
  public faBars = faBars;
  public faFileMedical = faFileMedical;
  public faPlusSquare = faPlusSquare;
  public faCalendarAlt = faCalendarAlt;
  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
