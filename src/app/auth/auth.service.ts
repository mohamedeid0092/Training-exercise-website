import { AuthData } from "./auth-data-model";


import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { TrainService } from "../training/training.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { UIservice } from "../shared/ui.service";
import { Store } from "@ngrx/store";
import * as app from '../app.reducer'
import * as ui from '../shared/ui.actions'
import * as Auth from '../auth/auth.actions'

@Injectable()
export class Authservice {

    constructor(private router: Router, private afauth: AngularFireAuth, private train: TrainService, private uiservice: UIservice, private store: Store<app.State>) { }

    initauthlisten() {
        this.afauth.authState.subscribe(user => {
            if (user) {
                this.store.dispatch(new Auth.Setauth())
                this.router.navigate(['/training'])
            } else {
                this.train.cancelsub()
                this.store.dispatch(new Auth.Setunauth())
                this.router.navigate(['/login'])
            }
        })
    }

    register(authdata: AuthData) {
        // this.uiservice.statechanged.next(true)
        this.store.dispatch(new ui.Startload())
        this.afauth.createUserWithEmailAndPassword(
            authdata.email,
            authdata.password
        ).then(res => {
            // this.uiservice.statechanged.next(false)
            this.store.dispatch(new ui.Stopload())
        }).catch(err => {
            // this.uiservice.statechanged.next(false)
            this.store.dispatch(new ui.Stopload())
            this.uiservice.showsnack(err.message, null, 3000)
        })
    }
    login(authdata: AuthData) {
        // this.uiservice.statechanged.next(true)
        this.store.dispatch(new ui.Startload())
        this.afauth.signInWithEmailAndPassword(authdata.email,
            authdata.password
        ).then(res => {
            this.store.dispatch(new ui.Stopload())
            // this.uiservice.statechanged.next(false)
        }).catch(err => {
            this.store.dispatch(new ui.Stopload())
            // this.uiservice.statechanged.next(false)
            this.uiservice.showsnack(err.message, null, 3000)

        })
    }
    logout() {

        this.afauth.signOut()
    }







}