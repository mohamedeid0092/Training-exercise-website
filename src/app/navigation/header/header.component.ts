import { Component, OnInit, EventEmitter, Output, } from '@angular/core';
import { Authservice } from 'src/app/auth/auth.service';

import * as Auth from '../../app.reducer'
import { Store } from "@ngrx/store";
import { Observable } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavtoggle = new EventEmitter<void>()
  darktheme: boolean = true
  Isauth: Observable<boolean>
  constructor(private authservice: Authservice, private store: Store<Auth.State>, private overlay: OverlayContainer) { }

  ngOnInit(): void {
    this.Isauth = this.store.select(Auth.getisAuth)
  }
  ontoggle() {
    this.sidenavtoggle.emit()
  }
  onlogout() {
    this.authservice.logout()
  }
  changeTheme(): void {
    if (this.darktheme) {
      this.overlay.getContainerElement().classList.add('darktheme');
    } else {
      this.overlay.getContainerElement().classList.remove('darktheme');
    }
  }

}
