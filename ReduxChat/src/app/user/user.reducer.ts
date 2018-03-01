import {User} from "./user.model";
import { Action } from 'redux';
import * as UserActions from './user.actions';
import { createSelector } from 'reselect';

export interface UserState {
  currentUser: User;
}

const initialState: UserState = {
  currentUser : null
};

export const UserReducer = function (state: UserState = initialState, action: Action): UserState {
  switch (action.type){
    case UserActions.SET_CURRENT_USER:
      const user: User = (<UserActions.SetCurrentUserAction>action).user;
      return {
        currentUser: user
      };

    default: return state;
  }
};

export const getUsersState = (state): UserState => state.users;

export const getCurrentUser = createSelector(
  getUsersState,
  (state: UserState) => state.currentUser
);
