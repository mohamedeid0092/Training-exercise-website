import { Component } from '@angular/core'
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
@Component({
    selector: 'app-stop-training',
    template: `<h1 mat-dialog-title> Are you sure ?</h1>
    <mat-dialog-content>
        you got already {{passdata.progress}}
    </mat-dialog-content>
    <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="true">Yes</button>
        <button mat-button [mat-dialog-close]="false">NO</button>
    </mat-dialog-actions>`
})
export class StopTrainingComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passdata: any) { }
}