import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {

  @Output() closeSidenav = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  // Injecting service
  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Subscribing to Observable we get from the Service
    // Assigning to variable so we can unsubscribe later
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  // Must do this or could cause memory leaks. Do it here in this hook
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    this.authService.logout();
  }




}
