import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { TrainService } from '../training.service';
import { StopTrainingComponent } from './stop-training.component';
import * as app from '../training.reducer'
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  Progress = 0;
  timer: number;
  constructor(private dailog: MatDialog, private trainservice: TrainService, private store: Store<app.State>) { }

  ngOnInit(): void {
    this.onResume()
  }
  onResume() {
    this.store.select(app.getactive).pipe(take(1)).subscribe(ex => {
      const step = ex.duration / 100 * 1000;
      this.timer = setInterval(() => {
        this.Progress = this.Progress + 1
        if (this.Progress >= 100) {
          this.trainservice.completeEX()
          clearInterval(this.timer)
        }
      }, step)
    })

  }
  onstop() {
    clearInterval(this.timer);
    const dailogRef = this.dailog.open(StopTrainingComponent, {
      data: {
        progress: this.Progress
      }
    })
    dailogRef.afterClosed().subscribe(res => {
      if (res) {
        this.trainservice.cancelEX(this.Progress)
      } else {
        this.onResume()
      }
    })
  }
}
