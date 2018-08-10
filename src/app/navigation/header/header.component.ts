import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>(); // @Output makes sidenavToggle listenable from outside
  isAuth$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>, private authService: AuthService) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuth); // hold Observable returned by select function which returns a piece of state
  }

  onToggleSidenav() {
    // This is emitted up to the app.component, where it is used
    this.sidenavToggle.emit(); // emitting sidenavToggle. This gets called by the click method on the header.component.html
  }

  onLogout() {
    this.authService.logout();
  }

}
