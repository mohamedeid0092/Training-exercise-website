"use strict";
exports.__esModule = true;
exports.Stopload = exports.Startload = exports.Stop_load = exports.Start_load = void 0;
exports.Start_load = '[UI] start load';
exports.Stop_load = '[UI] stop load';
var Startload = /** @class */ (function () {
    function Startload() {
        this.type = exports.Start_load;
    }
    return Startload;
}());
exports.Startload = Startload;
var Stopload = /** @class */ (function () {
    function Stopload() {
        this.type = exports.Stop_load;
    }
    return Stopload;
}());
exports.Stopload = Stopload;
