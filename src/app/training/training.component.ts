import { Component, OnInit } from '@angular/core';

import { TrainService } from './training.service';
import * as train from './training.reducer'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  ongotrain: Observable<boolean>
  constructor(private trainservice: TrainService, private store: Store<train.State>) { }

  ngOnInit(): void {
    this.ongotrain = this.store.select(train.getistrain)
  }


}
