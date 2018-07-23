import { Subject } from 'rxjs/Subject';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

export class AuthService {
  authChange = new Subject<boolean>(); // Like an Eventemitter with a payload of type boolean. An Observable
  private user: User;

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authChange.next(true); // Emitting it with a payload of true
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true); // Emitting it with a payload of true
  }

  logout() {
    this.user = null;
    this.authChange.next(false); // Emitting it with a payload of false
  }

  getUser() {
    return {...this.user}; // returning a copy
  }

  isAuth() {
    return this.user != null;
  }
}
