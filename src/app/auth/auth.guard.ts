import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../app.reducer';
import { take } from 'rxjs/operators';

// AuthGuard is a service, so when injecting service into a service we need @Injectable
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private store: Store<fromRoot.State>) {}

  // CanActivate checks if we can use a guarded route. Here we are checking via the state
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1)); // take - takes first value and completes
  }

  // CanLoad - unlike CanActivate it wont even load module if not authorized. Used in conjuction with lazy loading
  canLoad(route: Route) {
    return this.store.select(fromRoot.getIsAuth).pipe(take(1)); // take - takes first value and completes
  }
}
