import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/interfaces';

export const loadUsers = createAction(
  '[Users] Load Users'
);

export const loadUsersSuccess = createAction(
  '[Users] Load Users',
  props<{ data: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users] Load Users',
  props<{ error: any }>()
);


