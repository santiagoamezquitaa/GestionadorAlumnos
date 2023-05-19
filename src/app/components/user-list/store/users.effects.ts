import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as UsersActions from './users.actions';
import { HttpClient } from '@angular/common/http';
import { usersApi } from 'src/app/constant/constants';
import { User } from 'src/app/interfaces/interfaces';


@Injectable()
export class UsersEffects {

  loadUserss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(UsersActions.loadUsers),
      exhaustMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getUsersFromApi().pipe(
          map(response => UsersActions.loadUsersSuccess({ data: response })),
          catchError(error => of(UsersActions.loadUsersFailure({ error }))))
      )
    );
  });


  constructor(
    private actions$: Actions,
    private httpClient: HttpClient,
    ) {}

  getUsersFromApi(): Observable<User[]> {
      return this.httpClient.get<User[]>(usersApi);
    }
  
}
