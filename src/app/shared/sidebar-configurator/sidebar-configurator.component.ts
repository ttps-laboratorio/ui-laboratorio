import { Component } from '@angular/core';
import { routes } from '../../consts/routes';
import { faUserMd, faPlusSquare, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar-configurator',
  templateUrl: './sidebar-configurator.component.html',
  styleUrls: ['./sidebar-configurator.component.scss']
})
export class SidebarConfiguratorComponent {
  public routes: typeof routes = routes;
  public isOpenUiElements = false;
  public faUserMd = faUserMd;
  public faPlusSquare = faPlusSquare;
  public faCalendarAlt = faCalendarAlt;
  public openUiElements() {
    this.isOpenUiElements = !this.isOpenUiElements;
  }
}
