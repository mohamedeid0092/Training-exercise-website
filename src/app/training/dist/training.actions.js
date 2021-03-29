"use strict";
exports.__esModule = true;
exports.Stoptrain = exports.Starttrain = exports.Setfinishedtrain = exports.Setavaliabletrain = exports.Stop_training = exports.Start_training = exports.Set_fininshedtrain = exports.Set_avaliabletrain = void 0;
exports.Set_avaliabletrain = '[Training] set avaliable train';
exports.Set_fininshedtrain = '[Training] set finished train';
exports.Start_training = '[Training] start train';
exports.Stop_training = '[Training] stop train';
var Setavaliabletrain = /** @class */ (function () {
    function Setavaliabletrain(payload) {
        this.payload = payload;
        this.type = exports.Set_avaliabletrain;
    }
    return Setavaliabletrain;
}());
exports.Setavaliabletrain = Setavaliabletrain;
var Setfinishedtrain = /** @class */ (function () {
    function Setfinishedtrain(payload) {
        this.payload = payload;
        this.type = exports.Set_fininshedtrain;
    }
    return Setfinishedtrain;
}());
exports.Setfinishedtrain = Setfinishedtrain;
var Starttrain = /** @class */ (function () {
    function Starttrain(payload) {
        this.payload = payload;
        this.type = exports.Start_training;
    }
    return Starttrain;
}());
exports.Starttrain = Starttrain;
var Stoptrain = /** @class */ (function () {
    function Stoptrain() {
        this.type = exports.Stop_training;
    }
    return Stoptrain;
}());
exports.Stoptrain = Stoptrain;
