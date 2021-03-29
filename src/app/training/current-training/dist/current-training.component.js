"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CurrentTrainingComponent = void 0;
var core_1 = require("@angular/core");
var stop_training_component_1 = require("./stop-training.component");
var app = require("../training.reducer");
var operators_1 = require("rxjs/operators");
var CurrentTrainingComponent = /** @class */ (function () {
    function CurrentTrainingComponent(dailog, trainservice, store) {
        this.dailog = dailog;
        this.trainservice = trainservice;
        this.store = store;
        this.Progress = 0;
    }
    CurrentTrainingComponent.prototype.ngOnInit = function () {
        this.onResume();
    };
    CurrentTrainingComponent.prototype.onResume = function () {
        var _this = this;
        this.store.select(app.getactive).pipe(operators_1.take(1)).subscribe(function (ex) {
            var step = ex.duration / 100 * 1000;
            _this.timer = setInterval(function () {
                _this.Progress = _this.Progress + 1;
                if (_this.Progress >= 100) {
                    _this.trainservice.completeEX();
                    clearInterval(_this.timer);
                }
            }, step);
        });
    };
    CurrentTrainingComponent.prototype.onstop = function () {
        var _this = this;
        clearInterval(this.timer);
        var dailogRef = this.dailog.open(stop_training_component_1.StopTrainingComponent, {
            data: {
                progress: this.Progress
            }
        });
        dailogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.trainservice.cancelEX(_this.Progress);
            }
            else {
                _this.onResume();
            }
        });
    };
    CurrentTrainingComponent = __decorate([
        core_1.Component({
            selector: 'app-current-training',
            templateUrl: './current-training.component.html',
            styleUrls: ['./current-training.component.scss']
        })
    ], CurrentTrainingComponent);
    return CurrentTrainingComponent;
}());
exports.CurrentTrainingComponent = CurrentTrainingComponent;
