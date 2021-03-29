import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UIservice } from 'src/app/shared/ui.service';
import { Authservice } from '../auth.service';
import * as app from '../../app.reducer'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  Isload: Observable<boolean>


  constructor(private authservice: Authservice, private uiservice: UIservice, private store: Store<app.State>) { }

  ngOnInit() {
    this.Isload = this.store.select(app.getisload)
    // this.loadsubs = this.uiservice.statechanged.subscribe(isloading => {
    //   this.Isload = isloading
    // })
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() {
    this.authservice.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }
  // ngOnDestroy() {
  //   if (this.loadsubs) {
  //     this.loadsubs.unsubscribe()
  //   }

  // }
}
