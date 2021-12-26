import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from 'src/app/pages/auth/services';

@Component({
  selector: 'app-layout-menu',
  templateUrl: './layout-menu.component.html',
  styleUrls: ['./layout-menu.component.scss']
})
export class LayoutMenuComponent implements OnDestroy {

  @ViewChild('sidenav') sidenav: MatSidenav;
  public isShowSidebar: boolean;
  public mobileQuery: MediaQueryList;
  public authService: AuthService;
  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.isShowSidebar = !this.mobileQuery.matches;
    this.authService = authService;
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
    this.sidenav.close();
  }

  public isEmployee(): boolean {
    return this.authService.user.canActivate('ROLE_EMPLOYEE');
  }
  public isConfigurator(): boolean {
    return this.authService.user.canActivate('ROLE_CONFIGURATOR');
  }
  public isAdministrator(): boolean {
    return this.authService.user.canActivate('ROLE_ADMINISTRATOR');
  }
  public isPatient(): boolean {
    return this.authService.user.canActivate('ROLE_PATIENT');
  }
}
