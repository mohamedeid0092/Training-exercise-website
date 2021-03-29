import { Action } from "@ngrx/store";



export const Start_load = '[UI] start load';
export const Stop_load = '[UI] stop load'
export class Startload implements Action {
    readonly type = Start_load
}
export class Stopload implements Action {
    readonly type = Stop_load
}
export type Uiactions = Startload | Stopload