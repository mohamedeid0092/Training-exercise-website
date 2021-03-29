"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NewTrainingComponent = void 0;
var core_1 = require("@angular/core");
var app1 = require(".././training.reducer");
var app = require("../../app.reducer");
var NewTrainingComponent = /** @class */ (function () {
    function NewTrainingComponent(trainsevice, db, store) {
        this.trainsevice = trainsevice;
        this.db = db;
        this.store = store;
    }
    NewTrainingComponent.prototype.ngOnInit = function () {
        this.Isload = this.store.select(app.getisload);
        this.exercise = this.store.select(app1.getAvailable);
        this.fetchexercise();
    };
    NewTrainingComponent.prototype.fetchexercise = function () {
        this.trainsevice.getexercise();
    };
    NewTrainingComponent.prototype.onstart = function (form) {
        this.trainsevice.startEx(form.value.exercises);
    };
    NewTrainingComponent = __decorate([
        core_1.Component({
            selector: 'app-new-training',
            templateUrl: './new-training.component.html',
            styleUrls: ['./new-training.component.scss']
        })
    ], NewTrainingComponent);
    return NewTrainingComponent;
}());
exports.NewTrainingComponent = NewTrainingComponent;
