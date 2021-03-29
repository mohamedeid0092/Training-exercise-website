import { Action } from "@ngrx/store";



export const Set_auth = '[Auth] set auth';
export const Set_unauth = '[Auth] set unauth'
export class Setauth implements Action {
    readonly type = Set_auth
}
export class Setunauth implements Action {
    readonly type = Set_unauth
}
export type Authactions = Setauth | Setunauth