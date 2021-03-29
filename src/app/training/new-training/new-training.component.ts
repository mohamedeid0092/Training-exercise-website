import { Component, OnDestroy, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise,model';
import { TrainService } from '../training.service';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';

import * as app1 from '.././training.reducer'
import { Store } from '@ngrx/store';
import * as app from '../../app.reducer'
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {

  exercise: Observable<Exercise[]>
  Isload: Observable<boolean>
  constructor(private trainsevice: TrainService, private db: AngularFirestore, private store: Store<app1.State>) { }

  ngOnInit(): void {
    this.Isload = this.store.select(app.getisload)
    this.exercise = this.store.select(app1.getAvailable)

    this.fetchexercise()
  }
  fetchexercise() {
    this.trainsevice.getexercise()
  }
  onstart(form: NgForm) {
    this.trainsevice.startEx(form.value.exercises)
  }

}
