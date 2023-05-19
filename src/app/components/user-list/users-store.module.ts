import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/users.effects';
import { StoreModule } from '@ngrx/store';
import { reducer, usersFeatureKey } from './store/users.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(usersFeatureKey, reducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersStoreModule { }
