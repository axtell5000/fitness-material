
import { UIActions, START_LOADING, STOP_LOADING } from './ui.actions';

// interface - describing unique type
export interface State {
  isLoading: boolean;
}

// set initial state
const initialState: State = {
  isLoading: false
};

// We are using the Action to determine what to do
// If we are going to change the state we make a copy of it eg return { isLoading: true} to avoid mutation, the state must be immutable
export function uiReducer(state = initialState, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: true
      };
    case STOP_LOADING:
      return {
        isLoading: false
      };
    default:
      return state;
  }
}

// Exporting piece of state like this so we can use it easily elsewhere
export const getIsLoading = (state: State) => state.isLoading;

