import { Authactions, Set_auth, Set_unauth } from "./auth.actions";


export interface State {
    IsAuth: boolean
}
const intialstate: State = {
    IsAuth: false
}
export function authReducer(state = intialstate, action: Authactions) {
    switch (action.type) {
        case Set_auth:
            return {
                IsAuth: true
            };
        case Set_unauth:
            return {
                IsAuth: false
            };
        default: { return state }
    }

}
export const getAuth = (state: State) => state.IsAuth