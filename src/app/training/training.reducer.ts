
import { Exercise } from "./exercise,model";
import *as root from '../app.reducer'
import { Set_avaliabletrain, Set_fininshedtrain, Start_training, Stop_training, Trainactions } from "./training.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface TrainState {
    availableexercises: Exercise[];
    finishedexercises: Exercise[];
    activetraining: Exercise
}
export interface State extends root.State {
    training: TrainState
}
const intialstate: TrainState = {
    availableexercises: [],
    finishedexercises: [],
    activetraining: null
}
export function trainReducer(state = intialstate, action: Trainactions) {
    switch (action.type) {
        case Set_avaliabletrain:
            return {
                ...state,
                availableexercises: action.payload
            };
        case Set_fininshedtrain:
            return {
                ...state,
                finishedexercises: action.payload
            };
        case Start_training:
            return {
                ...state,
                activetraining: { ...state.availableexercises.find(ex => ex.id == action.payload) }
            };
        case Stop_training:
            return {
                ...state,
                activetraining: null
            };
        default: { return state }
    }

}


export const gettrainstate = createFeatureSelector<TrainState>('training')


export const getAvailable = createSelector(gettrainstate, (state: TrainState) => state.availableexercises)
export const getfinished = createSelector(gettrainstate, (state: TrainState) => state.finishedexercises)
export const getactive = createSelector(gettrainstate, (state: TrainState) => state.activetraining)
export const getistrain = createSelector(gettrainstate, (state: TrainState) => state.activetraining != null)