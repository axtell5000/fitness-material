import { Action } from '@ngrx/store';

// Actions have a type (like a text to describe what they do - this is used by reducer to determine what must be done to state.
// Actions also have payloads of data, but not in this case

export const START_LOADING = '[UI] Start Loading';
export const STOP_LOADING = '[UI] Stop Loading';

// again putting action in class helps with coding and error checking
export class StartLoading implements Action {
  readonly type = START_LOADING;
}

// again putting action in class helps with coding and error checking
export class StopLoading implements Action {
  readonly type = STOP_LOADING;
}

// exporting the actions
export type UIActions = StartLoading | StopLoading;

// This whole file is to help with error checking and general ease when using it across the App. It avoids some errors when using strings.
