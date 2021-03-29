import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot } from "@angular/router";

import * as Auth from '../app.reducer'
import { Store } from "@ngrx/store";
import { take } from "rxjs/operators";
@Injectable()
export class Authguard implements CanActivate, CanLoad {
    constructor(private store: Store<Auth.State>,) { };

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


        return this.store.select(Auth.getisAuth).pipe(take(1))

    }
    canLoad(route: Route) {

        return this.store.select(Auth.getisAuth).pipe(take(1))
    }
}