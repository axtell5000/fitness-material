import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromUi from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';


// What the App wide state will look like
export interface State {
  ui: fromUi.State;
  auth: fromAuth.State;
}

// Combining the reducers
export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer
};

// Helper function that allows us to quickly get a piece of state
export const getUiState = createFeatureSelector<fromUi.State>('ui');

// Helper function that gets a property from above piece of state, here the ui State
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

// Helper function that allows us to quickly get a piece of state
export const getAuthState = createFeatureSelector<fromAuth.State>('auth');

// Helper function that gets a property from above piece of state, here the ui State
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);
