import { createFeature, createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';
import { User } from 'src/app/interfaces/interfaces';

export const usersFeatureKey = 'users';

export interface State {
  data: User[];
}

export const initialState: State = {
  data: []
};

export const reducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, state => state),
  on(UsersActions.loadUsersSuccess, (state, action) => {
    return {
      ...state,
      data: action.data,
    }
  }),
  on(UsersActions.loadUsersFailure, (state, action) => state),
);

export const usersFeature = createFeature({
  name: usersFeatureKey,
  reducer,
});

