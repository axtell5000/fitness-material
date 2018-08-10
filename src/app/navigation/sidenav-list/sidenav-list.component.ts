import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>(); // event emitter
  isAuth$: Observable<boolean>; // Observable that takes a boolean

  // Injecting service
  constructor(private authService: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    // hold Observable returned by select function which returns a piece of state
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }

  onClose() {
    // This is emitted up to the app.component, where it is used
    // emitting closeSidenav. This onClose method gets called by the click method on the sidenav-list.component.html
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    this.authService.logout(); // calling method on auth service
  }




}
