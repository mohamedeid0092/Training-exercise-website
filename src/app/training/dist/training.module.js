"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TrainingModule = void 0;
var core_1 = require("@angular/core");
var store_1 = require("@ngrx/store");
var shared_module_1 = require("../shared/shared.module");
var current_training_component_1 = require("./current-training/current-training.component");
var stop_training_component_1 = require("./current-training/stop-training.component");
var new_training_component_1 = require("./new-training/new-training.component");
var past_trainings_component_1 = require("./past-trainings/past-trainings.component");
var training_routing_module_1 = require("./training-routing.module");
var training_component_1 = require("./training.component");
var training_reducer_1 = require("./training.reducer");
var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = __decorate([
        core_1.NgModule({
            declarations: [new_training_component_1.NewTrainingComponent, current_training_component_1.CurrentTrainingComponent,
                past_trainings_component_1.PastTrainingsComponent, training_component_1.TrainingComponent,
                stop_training_component_1.StopTrainingComponent],
            imports: [shared_module_1.SharedModule, training_routing_module_1.TrainingRoutingModule, store_1.StoreModule.forFeature('training', training_reducer_1.trainReducer)],
            exports: [],
            entryComponents: [stop_training_component_1.StopTrainingComponent]
        })
    ], TrainingModule);
    return TrainingModule;
}());
exports.TrainingModule = TrainingModule;
