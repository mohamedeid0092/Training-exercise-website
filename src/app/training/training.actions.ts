import { Action } from "@ngrx/store";
import { Exercise } from "./exercise,model";



export const Set_avaliabletrain = '[Training] set avaliable train';
export const Set_fininshedtrain = '[Training] set finished train'
export const Start_training = '[Training] start train'
export const Stop_training = '[Training] stop train'
export class Setavaliabletrain implements Action {
    readonly type = Set_avaliabletrain
    constructor(public payload: Exercise[]) { }
}
export class Setfinishedtrain implements Action {
    readonly type = Set_fininshedtrain
    constructor(public payload: Exercise[]) { }
}
export class Starttrain implements Action {
    readonly type = Start_training
    constructor(public payload: string) { }
}
export class Stoptrain implements Action {
    readonly type = Stop_training
}
export type Trainactions = Setavaliabletrain | Setfinishedtrain | Stoptrain | Starttrain