import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class UIservice {

    constructor(private snackbar: MatSnackBar) { }
    showsnack(msg: string, action: any, duration: any) {
        this.snackbar.open(msg, action, {
            duration: duration
        })

    }

}