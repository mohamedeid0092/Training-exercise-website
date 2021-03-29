"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SidenavListComponent = void 0;
var core_1 = require("@angular/core");
var Auth = require("../../app.reducer");
var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent(authservice, store) {
        this.authservice = authservice;
        this.store = store;
        this.closesidenav = new core_1.EventEmitter();
    }
    SidenavListComponent.prototype.ngOnInit = function () {
        this.IsAuth = this.store.select(Auth.getisAuth);
    };
    SidenavListComponent.prototype.onclose = function () {
        this.closesidenav.emit();
    };
    SidenavListComponent.prototype.onlogout = function () {
        this.authservice.logout();
        this.onclose();
    };
    __decorate([
        core_1.Output()
    ], SidenavListComponent.prototype, "closesidenav");
    SidenavListComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav-list',
            templateUrl: './sidenav-list.component.html',
            styleUrls: ['./sidenav-list.component.scss']
        })
    ], SidenavListComponent);
    return SidenavListComponent;
}());
exports.SidenavListComponent = SidenavListComponent;
