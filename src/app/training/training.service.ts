import { Subscription } from "rxjs";
import { map, take } from "rxjs/operators";
import { Exercise } from "./exercise,model";
import { AngularFirestore } from '@angular/fire/firestore'
import { Injectable } from "@angular/core";
import { UIservice } from "../shared/ui.service";
import * as app from './training.reducer'
import * as ui from '../shared/ui.actions'
import * as train from './training.actions'
import { Store } from "@ngrx/store";
@Injectable()
export class TrainService {


    fbsubs: Subscription[] = [
    ]

    constructor(private db: AngularFirestore, private uiservice: UIservice, private store: Store<app.State>) { }
    getexercise() {
        this.store.dispatch(new ui.Startload())
        this.fbsubs.push(this.db.collection('availableExercises').snapshotChanges().pipe(map(docArray => {

            return docArray.map(doc => {
                return {
                    id: doc.payload.doc.id,
                    ...doc.payload.doc.data() as Exercise
                }
            })
        })).subscribe((exercises: Exercise[]) => {
            this.store.dispatch(new ui.Stopload())
            this.store.dispatch(new train.Setavaliabletrain(exercises))
        }, error => {
            this.store.dispatch(new ui.Stopload())
            this.uiservice.showsnack("fetchin execises failed , please try agian later", null, 5000)

        }))
    }
    startEx(selectId: string) {
        this.store.dispatch(new train.Starttrain(selectId))
    }
    completeEX() {
        this.store.select(app.getactive).pipe(take(1)).subscribe(ex => {
            this.adddata({ ...ex, date: new Date(), state: "completed" })
        })

        this.store.dispatch(new train.Stoptrain())
    }
    cancelEX(progress: number) {
        this.store.select(app.getactive).pipe(take(1)).subscribe(ex => {
            this.adddata({ ...ex, duration: ex.duration * (progress / 100), calories: ex.calories * (progress / 100), date: new Date(), state: 'cancelled' })
        })

        this.store.dispatch(new train.Stoptrain())
    }

    getcompletedorcancelled() {
        this.fbsubs.push(this.db.collection('finishedExercise').valueChanges().subscribe((exercise: Exercise[]) => {
            this.store.dispatch(new train.Setfinishedtrain(exercise))
        }))
    }
    cancelsub() {
        this.fbsubs.forEach(sub => sub.unsubscribe())
    }
    private adddata(exercise: Exercise) {
        this.db.collection('finishedExercise').add(exercise)
    }
}