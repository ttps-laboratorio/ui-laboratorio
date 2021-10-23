import { Component } from '@angular/core';
import { routes } from '../../consts/routes';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-administrator',
  templateUrl: './sidebar-administrator.component.html',
  styleUrls: ['./sidebar-administrator.component.scss']
})
export class SidebarAdministratorComponent {
  public routes: typeof routes = routes;
  public isOpenUiElements = false;
  public faUser = faUser;
  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
