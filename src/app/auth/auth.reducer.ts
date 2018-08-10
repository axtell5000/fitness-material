import { Action } from '@ngrx/store';

import { AuthActions, SET_AUTHENTICATED, SET_UNAUTHENTICATED } from './auth.actions';

// interface - describing unique type
export interface State {
  isAuthenticated: boolean;
}

const initialState: State = {
  isAuthenticated: false
};

// We are using the Action to determine what to do
// If we are going to change the state we make a copy of it eg return {isAuthenticated: true} to avoid mutation, the state must be immutable
export function authReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        isAuthenticated: true
      };
    case SET_UNAUTHENTICATED:
      return {
        isAuthenticated: false
      };
    default:
      return state;
  }
}

// Exporting piece of state like this so we can use it easily elsewhere
export const getIsAuth = (state: State) => state.isAuthenticated;

