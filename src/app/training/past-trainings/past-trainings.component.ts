import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';

import { Exercise } from '../exercise,model';
import { TrainService } from '../training.service';
import * as app from '../training.reducer'
@Component({
  selector: 'app-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit {

  constructor(private trainservice: TrainService, private store: Store<app.State>) { }
  displaycolumns = ['date', 'name', 'duration', 'calories', 'state']
  dataSource = new MatTableDataSource<Exercise>()

  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator

  ngOnInit(): void {
    this.store.select(app.getfinished).subscribe((ex: Exercise[]) => {
      this.dataSource.data = ex
    })
    this.trainservice.getcompletedorcancelled()
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  filter(value1: string) {
    this.dataSource.filter = value1.trim().toLowerCase();
  }


}
