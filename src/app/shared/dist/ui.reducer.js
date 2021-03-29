"use strict";
exports.__esModule = true;
exports.getload = exports.uiReducer = void 0;
var ui_actions_1 = require("./ui.actions");
var intialstate = {
    Isload: false
};
function uiReducer(state, action) {
    if (state === void 0) { state = intialstate; }
    switch (action.type) {
        case ui_actions_1.Start_load:
            return {
                Isload: true
            };
        case ui_actions_1.Stop_load:
            return {
                Isload: false
            };
        default: {
            return state;
        }
    }
}
exports.uiReducer = uiReducer;
exports.getload = function (state) { return state.Isload; };
