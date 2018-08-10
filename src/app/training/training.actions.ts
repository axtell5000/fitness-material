import { Action } from '@ngrx/store';

import { Exercise } from './exercise.model';

export const SET_AVAILABLE_TRAININGS = '[Training] Set Available Trainings';
export const SET_FINISHED_TRAININGS = '[Training] Set Finished Trainings';
export const START_TRAINING = '[Training] Start Training';
export const STOP_TRAINING = '[Training] Stop Training';

// Actions have a type (like a text to describe what they do - this is used by reducer to determine what must be done to state.
// Actions also have payloads of data, we do this in the constructor

export class SetAvailableTrainings implements Action {
  readonly type = SET_AVAILABLE_TRAININGS;

  // This is for setting up payload of the action
  constructor(public payload: Exercise[]) {}
}

// again putting action in class helps with coding and error
export class SetFinishedTrainings implements Action {
  readonly type = SET_FINISHED_TRAININGS;

  // This is for setting up payload of the action
  constructor(public payload: Exercise[]) {}
}

export class StartTraining implements Action {
  readonly type = START_TRAINING;

  // This is for setting up payload of the action
  constructor(public payload: string) {}
}

export class StopTraining implements Action {
  readonly type = STOP_TRAINING;

}


export type TrainingActions = SetAvailableTrainings | SetFinishedTrainings | StartTraining | StopTraining;

// This whole file is to help with error checking and general ease when using it across the App. It avoids some errors when using strings.
