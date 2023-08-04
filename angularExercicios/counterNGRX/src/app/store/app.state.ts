import { createAction, createReducer, on, props } from "@ngrx/store";

export interface IAppState{
  counter : number;
}

export const AppInitialState : IAppState = {
  counter  : 3
}

export const incrementCouter = createAction("[App] Increment Counter")

export const decrementCounter = createAction("[App] Decrement Counter")

export const inputCount = createAction("[App] Set Count", props<{setCount : number}>())

export const appReducer = createReducer( AppInitialState , on(incrementCouter,
  (state) => {
    state = {
      ...state,
      counter : state.counter + 1
    }
    return state
  }),

  on(decrementCounter,
    (state) => {
      state = {
        ...state,
        counter : state.counter - 1
      }
      return state
    }),

    on(inputCount,
      (state,action) => {
        state = {
          ...state,
          counter : action.setCount
        }
        return state
      })
)
