"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PastTrainingsComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var app = require("../training.reducer");
var PastTrainingsComponent = /** @class */ (function () {
    function PastTrainingsComponent(trainservice, store) {
        this.trainservice = trainservice;
        this.store = store;
        this.displaycolumns = ['date', 'name', 'duration', 'calories', 'state'];
        this.dataSource = new table_1.MatTableDataSource();
    }
    PastTrainingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(app.getfinished).subscribe(function (ex) {
            _this.dataSource.data = ex;
        });
        this.trainservice.getcompletedorcancelled();
    };
    PastTrainingsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    PastTrainingsComponent.prototype.filter = function (value1) {
        this.dataSource.filter = value1.trim().toLowerCase();
    };
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], PastTrainingsComponent.prototype, "sort");
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], PastTrainingsComponent.prototype, "paginator");
    PastTrainingsComponent = __decorate([
        core_1.Component({
            selector: 'app-past-trainings',
            templateUrl: './past-trainings.component.html',
            styleUrls: ['./past-trainings.component.scss']
        })
    ], PastTrainingsComponent);
    return PastTrainingsComponent;
}());
exports.PastTrainingsComponent = PastTrainingsComponent;
