import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromUi from './shared/ui.reducer';
import * as fromAuth from './auth/auth.reducer';


// What the App wide state will look like
export interface State {
  ui: fromUi.State;
  auth: fromAuth.State;
}

// Combining the reducers, we dont do Training state here because of lazy loading - it must be done separately
export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer
};

// Helper function that allows us to quickly get a slice of the state
export const getUiState = createFeatureSelector<fromUi.State>('ui'); // same as property name in object used to combine reducers above

// Helper function that gets a property from above piece of state, here the ui State
export const getIsLoading = createSelector(getUiState, fromUi.getIsLoading);

// Helper function that allows us to quickly get a slice of the state
export const getAuthState = createFeatureSelector<fromAuth.State>('auth'); // same as property name in object used to combine reducers above

// Helper function that gets a property from above piece of state, here the auth State
export const getIsAuth = createSelector(getAuthState, fromAuth.getIsAuth);
