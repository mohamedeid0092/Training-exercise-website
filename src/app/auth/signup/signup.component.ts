import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { UIservice } from 'src/app/shared/ui.service';
import { Authservice } from '../auth.service';
import * as app from '../../app.reducer'
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate: any;
  Isload$: Observable<boolean>


  constructor(private authservice: Authservice, private uiservice: UIservice, private store: Store<app.State>) { }

  ngOnInit(): void {
    this.Isload$ = this.store.select(app.getisload)
    this.maxDate = new Date
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18)
  }
  onsubmit(form: NgForm) {
    this.authservice.register({
      email: form.value.email,
      password: form.value.password
    })
  }

}
