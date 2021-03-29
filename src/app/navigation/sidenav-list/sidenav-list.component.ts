import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Authservice } from 'src/app/auth/auth.service';
import * as Auth from '../../app.reducer'
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() closesidenav = new EventEmitter<void>()

  IsAuth: Observable<boolean>
  constructor(private authservice: Authservice, private store: Store<Auth.State>) { }

  ngOnInit(): void {
    this.IsAuth = this.store.select(Auth.getisAuth)
  }
  onclose() {
    this.closesidenav.emit()
  }
  onlogout() {
    this.authservice.logout()
    this.onclose()
  }

}
