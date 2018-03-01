import {Reducer,combineReducers} from 'redux';
import {UserReducer, UserState} from "./user/user.reducer";
import {ThreadReducer,ThreadState} from "./thread/thread.reducer";

export interface AppState{
  users: UserState;
  threads: ThreadState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  users: UserReducer,
  threads: ThreadReducer
});

export default rootReducer;
