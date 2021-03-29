"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var button_1 = require("@angular/material/button");
var icon_1 = require("@angular/material/icon");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var checkbox_1 = require("@angular/material/checkbox");
var sidenav_1 = require("@angular/material/sidenav");
var toolbar_1 = require("@angular/material/toolbar");
var list_1 = require("@angular/material/list");
var tabs_1 = require("@angular/material/tabs");
var card_1 = require("@angular/material/card");
var select_1 = require("@angular/material/select");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var dialog_1 = require("@angular/material/dialog");
var table_1 = require("@angular/material/table");
var sort_1 = require("@angular/material/sort");
var paginator_1 = require("@angular/material/paginator");
var snack_bar_1 = require("@angular/material/snack-bar");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [button_1.MatButtonModule, icon_1.MatIconModule, form_field_1.MatFormFieldModule, input_1.MatInputModule, datepicker_1.MatDatepickerModule, core_2.MatNativeDateModule, checkbox_1.MatCheckboxModule, sidenav_1.MatSidenavModule, toolbar_1.MatToolbarModule, list_1.MatListModule, tabs_1.MatTabsModule, card_1.MatCardModule, select_1.MatSelectModule, progress_spinner_1.MatProgressSpinnerModule, dialog_1.MatDialogModule, table_1.MatTableModule, sort_1.MatSortModule, paginator_1.MatPaginatorModule, snack_bar_1.MatSnackBarModule, slide_toggle_1.MatSlideToggleModule],
            exports: [button_1.MatButtonModule, icon_1.MatIconModule, form_field_1.MatFormFieldModule, input_1.MatInputModule, datepicker_1.MatDatepickerModule, core_2.MatNativeDateModule, checkbox_1.MatCheckboxModule, sidenav_1.MatSidenavModule, toolbar_1.MatToolbarModule, list_1.MatListModule, tabs_1.MatTabsModule, card_1.MatCardModule, select_1.MatSelectModule, progress_spinner_1.MatProgressSpinnerModule, dialog_1.MatDialogModule, table_1.MatTableModule, sort_1.MatSortModule, paginator_1.MatPaginatorModule, snack_bar_1.MatSnackBarModule, slide_toggle_1.MatSlideToggleModule]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
