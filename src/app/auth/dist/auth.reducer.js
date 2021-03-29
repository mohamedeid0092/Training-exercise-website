"use strict";
exports.__esModule = true;
exports.getAuth = exports.authReducer = void 0;
var auth_actions_1 = require("./auth.actions");
var intialstate = {
    IsAuth: false
};
function authReducer(state, action) {
    if (state === void 0) { state = intialstate; }
    switch (action.type) {
        case auth_actions_1.Set_auth:
            return {
                IsAuth: true
            };
        case auth_actions_1.Set_unauth:
            return {
                IsAuth: false
            };
        default: {
            return state;
        }
    }
}
exports.authReducer = authReducer;
exports.getAuth = function (state) { return state.IsAuth; };
