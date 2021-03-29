import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store'
import * as ui from './shared/ui.reducer'
import *as Auth from './auth/auth.reducer'
export interface State {
    ui: ui.State;
    auth: Auth.State
}
export const reducers: ActionReducerMap<State> = {
    ui: ui.uiReducer,
    auth: Auth.authReducer

};
export const getuistate = createFeatureSelector<ui.State>('ui')
export const getisload = createSelector(getuistate, ui.getload)
export const getauthstate = createFeatureSelector<Auth.State>('auth')
export const getisAuth = createSelector(getauthstate, Auth.getAuth)