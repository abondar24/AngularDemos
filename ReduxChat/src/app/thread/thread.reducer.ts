import {Thread} from "./thread.model"
import {Action} from "redux";
import * as ThreadAction from './thread.actions';
import { createSelector } from 'reselect';

export interface ThreadEntities {
  [id: string]: Thread;
}

export interface ThreadState {
  ids: string[];
  entities: ThreadEntities;
  currentThreadId?: string;
}

const initialState: ThreadState = {

  ids: [],
  currentThreadId: null,
  entities: {}
};

export const ThreadReducer =
  function (state: ThreadState = initialState, action: Action): ThreadState {
    switch (action.type){
      case ThreadAction.ADD_THREAD: {
        const thread = (<ThreadAction.AddThreadAction>action).thread;

        if (state.ids.includes(thread.id)){
          return state;
        }

        return {
          ids: [...state.ids, thread.id],
          currentThreadId: state.currentThreadId,
          entities: Object.assign({},state.entities,{
            [thread.id]: thread
          })
        };
      }

      case ThreadAction.ADD_MESSAGE: {
        const thread = (<ThreadAction.AddMessageAction>action).thread;
        const message = (<ThreadAction.AddMessageAction>action).message;

        const isRead = message.thread.id === state.currentThreadId ? true:message.isRead;
        const newMessage = Object.assign({},message,{isRead: isRead});

        const oldThread = state.entities[thread.id];
        const newThread = Object.assign({},oldThread,{
          messages: [...oldThread.messages,newMessage]
        });

        return {
          ids: state.ids,
          currentThreadId: state.currentThreadId,
          entities: Object.assign({},state.entities,{
            [thread.id]: newThread
          })
        };
      }

      case ThreadAction.SELECT_THREAD: {
         const thread = (<ThreadAction.SelectThreadAction>action).thread;
        const oldThread = state.entities[thread.id];

        const newMessages = oldThread.messages.map(
          (message) => Object.assign({},message,{isRead: true}));

        const newThread = Object.assign({},oldThread, {
          messages: newMessages
        });

        return {
          ids: state.ids,
          currentThreadId: thread.id,
          entities: Object.assign({},state.entities,{
            [thread.id]: newThread
          })
        };
      }

      default:
        return state;
    }
  };

export const getThreadState = (state): ThreadState => state.threads;

export const getThreadEntities = createSelector(
  getThreadState,
  (state: ThreadState) => state.entities);

export const getCurrentThread = createSelector(
  getThreadEntities,
  getThreadState,
  (entities: ThreadEntities, state: ThreadState) => entities[state.currentThreadId]);

export const getAllThreads = createSelector(
  getThreadEntities,
  (entities: ThreadEntities) => Object.keys(entities).map(threadId => entities[threadId]));

export const getUnreadMessageCount = createSelector(
  getAllThreads,
  (threads: Thread[]) => threads.reduce(
    (unreadCount: number, thread: Thread) =>{
      thread.messages.forEach(message=>{
        if (!message.isRead){
          ++unreadCount;
        }
      });
      return unreadCount;
    },
    0));

export const getAllMessages = createSelector(
   getAllThreads,
  threads => threads.reduce((messages,thread)=> [...messages,...thread.messages],[])
    .sort((m1,m2)=>m1.sentAt-m2.sentAt));
