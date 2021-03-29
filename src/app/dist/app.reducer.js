"use strict";
exports.__esModule = true;
exports.getisAuth = exports.getauthstate = exports.getisload = exports.getuistate = exports.reducers = void 0;
var store_1 = require("@ngrx/store");
var ui = require("./shared/ui.reducer");
var Auth = require("./auth/auth.reducer");
exports.reducers = {
    ui: ui.uiReducer,
    auth: Auth.authReducer
};
exports.getuistate = store_1.createFeatureSelector('ui');
exports.getisload = store_1.createSelector(exports.getuistate, ui.getload);
exports.getauthstate = store_1.createFeatureSelector('auth');
exports.getisAuth = store_1.createSelector(exports.getauthstate, Auth.getAuth);
