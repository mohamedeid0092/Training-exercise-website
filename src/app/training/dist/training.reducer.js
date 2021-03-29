"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.getistrain = exports.getactive = exports.getfinished = exports.getAvailable = exports.gettrainstate = exports.trainReducer = void 0;
var training_actions_1 = require("./training.actions");
var store_1 = require("@ngrx/store");
var intialstate = {
    availableexercises: [],
    finishedexercises: [],
    activetraining: null
};
function trainReducer(state, action) {
    if (state === void 0) { state = intialstate; }
    switch (action.type) {
        case training_actions_1.Set_avaliabletrain:
            return __assign(__assign({}, state), { availableexercises: action.payload });
        case training_actions_1.Set_fininshedtrain:
            return __assign(__assign({}, state), { finishedexercises: action.payload });
        case training_actions_1.Start_training:
            return __assign(__assign({}, state), { activetraining: __assign({}, state.availableexercises.find(function (ex) { return ex.id == action.payload; })) });
        case training_actions_1.Stop_training:
            return __assign(__assign({}, state), { activetraining: null });
        default: {
            return state;
        }
    }
}
exports.trainReducer = trainReducer;
exports.gettrainstate = store_1.createFeatureSelector('training');
exports.getAvailable = store_1.createSelector(exports.gettrainstate, function (state) { return state.availableexercises; });
exports.getfinished = store_1.createSelector(exports.gettrainstate, function (state) { return state.finishedexercises; });
exports.getactive = store_1.createSelector(exports.gettrainstate, function (state) { return state.activetraining; });
exports.getistrain = store_1.createSelector(exports.gettrainstate, function (state) { return state.activetraining != null; });
