import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ConfiguratorGuard } from 'src/app/pages/auth/guards/configurator.guard';
import { AuthGuard } from 'src/app/pages/auth/guards';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/pages/auth/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnDestroy {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public isShowSidebar: boolean;
  public mobileQuery: MediaQueryList;
  public authService:AuthService;
  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, authService:AuthService) {
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

  public isEmployee(): boolean{
    return this.authService.user.canActivate('ROLE_EMPLOYEE');
  }

  public isConfigurator(): boolean {
    return this.authService.user.canActivate('ROLE_CONFIGURATOR');
  }
  public isAdministrator(): boolean {
    return this.authService.user.canActivate('ROLE_ADMINISTRATOR');
    
  }
}
