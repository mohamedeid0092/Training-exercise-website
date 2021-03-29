"use strict";
exports.__esModule = true;
exports.Setunauth = exports.Setauth = exports.Set_unauth = exports.Set_auth = void 0;
exports.Set_auth = '[Auth] set auth';
exports.Set_unauth = '[Auth] set unauth';
var Setauth = /** @class */ (function () {
    function Setauth() {
        this.type = exports.Set_auth;
    }
    return Setauth;
}());
exports.Setauth = Setauth;
var Setunauth = /** @class */ (function () {
    function Setunauth() {
        this.type = exports.Set_unauth;
    }
    return Setunauth;
}());
exports.Setunauth = Setunauth;
