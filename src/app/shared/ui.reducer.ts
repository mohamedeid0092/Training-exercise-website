import { Start_load, Stop_load, Uiactions } from "./ui.actions";

export interface State {
    Isload: boolean
}
const intialstate: State = {
    Isload: false
}
export function uiReducer(state = intialstate, action: Uiactions) {
    switch (action.type) {
        case Start_load:
            return {
                Isload: true
            };
        case Stop_load:
            return {
                Isload: false
            };
        default: { return state }
    }

}
export const getload = (state: State) => state.Isload