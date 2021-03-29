"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Authguard = void 0;
var core_1 = require("@angular/core");
var Auth = require("../app.reducer");
var operators_1 = require("rxjs/operators");
var Authguard = /** @class */ (function () {
    function Authguard(store) {
        this.store = store;
    }
    ;
    Authguard.prototype.canActivate = function (route, state) {
        return this.store.select(Auth.getisAuth).pipe(operators_1.take(1));
    };
    Authguard.prototype.canLoad = function (route) {
        return this.store.select(Auth.getisAuth).pipe(operators_1.take(1));
    };
    Authguard = __decorate([
        core_1.Injectable()
    ], Authguard);
    return Authguard;
}());
exports.Authguard = Authguard;
