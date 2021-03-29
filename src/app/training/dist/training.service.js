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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TrainService = void 0;
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var app = require("./training.reducer");
var ui = require("../shared/ui.actions");
var train = require("./training.actions");
var TrainService = /** @class */ (function () {
    function TrainService(db, uiservice, store) {
        this.db = db;
        this.uiservice = uiservice;
        this.store = store;
        this.fbsubs = [];
    }
    TrainService.prototype.getexercise = function () {
        var _this = this;
        this.store.dispatch(new ui.Startload());
        this.fbsubs.push(this.db.collection('availableExercises').snapshotChanges().pipe(operators_1.map(function (docArray) {
            return docArray.map(function (doc) {
                return __assign({ id: doc.payload.doc.id }, doc.payload.doc.data());
            });
        })).subscribe(function (exercises) {
            _this.store.dispatch(new ui.Stopload());
            _this.store.dispatch(new train.Setavaliabletrain(exercises));
        }, function (error) {
            _this.store.dispatch(new ui.Stopload());
            _this.uiservice.showsnack("fetchin execises failed , please try agian later", null, 5000);
        }));
    };
    TrainService.prototype.startEx = function (selectId) {
        this.store.dispatch(new train.Starttrain(selectId));
    };
    TrainService.prototype.completeEX = function () {
        var _this = this;
        this.store.select(app.getactive).pipe(operators_1.take(1)).subscribe(function (ex) {
            _this.adddata(__assign(__assign({}, ex), { date: new Date(), state: "completed" }));
        });
        this.store.dispatch(new train.Stoptrain());
    };
    TrainService.prototype.cancelEX = function (progress) {
        var _this = this;
        this.store.select(app.getactive).pipe(operators_1.take(1)).subscribe(function (ex) {
            _this.adddata(__assign(__assign({}, ex), { duration: ex.duration * (progress / 100), calories: ex.calories * (progress / 100), date: new Date(), state: 'cancelled' }));
        });
        this.store.dispatch(new train.Stoptrain());
    };
    TrainService.prototype.getcompletedorcancelled = function () {
        var _this = this;
        this.fbsubs.push(this.db.collection('finishedExercise').valueChanges().subscribe(function (exercise) {
            _this.store.dispatch(new train.Setfinishedtrain(exercise));
        }));
    };
    TrainService.prototype.cancelsub = function () {
        this.fbsubs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    TrainService.prototype.adddata = function (exercise) {
        this.db.collection('finishedExercise').add(exercise);
    };
    TrainService = __decorate([
        core_1.Injectable()
    ], TrainService);
    return TrainService;
}());
exports.TrainService = TrainService;
