
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "../shared/shared.module";
import { CurrentTrainingComponent } from "./current-training/current-training.component";
import { StopTrainingComponent } from "./current-training/stop-training.component";
import { NewTrainingComponent } from "./new-training/new-training.component";
import { PastTrainingsComponent } from "./past-trainings/past-trainings.component";
import { TrainingRoutingModule } from "./training-routing.module";
import { TrainingComponent } from "./training.component";
import { trainReducer } from "./training.reducer";

@NgModule({
    declarations: [NewTrainingComponent, CurrentTrainingComponent,
        PastTrainingsComponent, TrainingComponent,
        StopTrainingComponent],
    imports: [SharedModule, TrainingRoutingModule, StoreModule.forFeature('training', trainReducer)],
    exports: [],
    entryComponents: [StopTrainingComponent]
})
export class TrainingModule {

}