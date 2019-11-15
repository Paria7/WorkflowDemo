import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { UserDataService, AuthService } from '../../services';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './smc-layout.component.html',
  styleUrls: ['./smc-layout.component.scss']
})
export class SMCLayoutComponent implements OnInit, OnDestroy {
  @Input() public requireLogin = true;

  private subscriptions: Subscription[] = [];

  constructor(private userDataService: UserDataService,
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit(): void {
    if (this.requireLogin && !this.authService.checkLogin()) {
      let url = location.href.substring(location.origin.length);
      if (url.indexOf("/portal?LineShowName=") !== 0) {
        this.router.navigate(['login']);
      }
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
