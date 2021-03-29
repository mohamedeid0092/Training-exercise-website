"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Authservice = void 0;
var core_1 = require("@angular/core");
var ui = require("../shared/ui.actions");
var Auth = require("../auth/auth.actions");
var Authservice = /** @class */ (function () {
    function Authservice(router, afauth, train, uiservice, store) {
        this.router = router;
        this.afauth = afauth;
        this.train = train;
        this.uiservice = uiservice;
        this.store = store;
    }
    Authservice.prototype.initauthlisten = function () {
        var _this = this;
        this.afauth.authState.subscribe(function (user) {
            if (user) {
                _this.store.dispatch(new Auth.Setauth());
                _this.router.navigate(['/training']);
            }
            else {
                _this.train.cancelsub();
                _this.store.dispatch(new Auth.Setunauth());
                _this.router.navigate(['/login']);
            }
        });
    };
    Authservice.prototype.register = function (authdata) {
        var _this = this;
        // this.uiservice.statechanged.next(true)
        this.store.dispatch(new ui.Startload());
        this.afauth.createUserWithEmailAndPassword(authdata.email, authdata.password).then(function (res) {
            // this.uiservice.statechanged.next(false)
            _this.store.dispatch(new ui.Stopload());
        })["catch"](function (err) {
            // this.uiservice.statechanged.next(false)
            _this.store.dispatch(new ui.Stopload());
            _this.uiservice.showsnack(err.message, null, 3000);
        });
    };
    Authservice.prototype.login = function (authdata) {
        var _this = this;
        // this.uiservice.statechanged.next(true)
        this.store.dispatch(new ui.Startload());
        this.afauth.signInWithEmailAndPassword(authdata.email, authdata.password).then(function (res) {
            _this.store.dispatch(new ui.Stopload());
            // this.uiservice.statechanged.next(false)
        })["catch"](function (err) {
            _this.store.dispatch(new ui.Stopload());
            // this.uiservice.statechanged.next(false)
            _this.uiservice.showsnack(err.message, null, 3000);
        });
    };
    Authservice.prototype.logout = function () {
        this.afauth.signOut();
    };
    Authservice = __decorate([
        core_1.Injectable()
    ], Authservice);
    return Authservice;
}());
exports.Authservice = Authservice;
