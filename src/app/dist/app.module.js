"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./material.module");
var welcome_component_1 = require("./welcome/welcome.component");
var flex_layout_1 = require("@angular/flex-layout");
var header_component_1 = require("./navigation/header/header.component");
var sidenav_list_component_1 = require("./navigation/sidenav-list/sidenav-list.component");
var auth_service_1 = require("./auth/auth.service");
var training_service_1 = require("./training/training.service");
var fire_1 = require("@angular/fire");
var environment_1 = require("src/environments/environment");
var ui_service_1 = require("./shared/ui.service");
var auth_module_1 = require("./auth/auth.module");
var firestore_1 = require("@angular/fire/firestore");
var store_1 = require("@ngrx/store");
var app_reducer_1 = require("./app.reducer");
var forms_1 = require("@angular/forms");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                header_component_1.HeaderComponent,
                sidenav_list_component_1.SidenavListComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
                flex_layout_1.FlexLayoutModule,
                fire_1.AngularFireModule.initializeApp(environment_1.environment.firebase),
                firestore_1.AngularFirestoreModule,
                store_1.StoreModule.forRoot(app_reducer_1.reducers),
                forms_1.FormsModule,
                auth_module_1.AuthModule,
            ],
            providers: [auth_service_1.Authservice, training_service_1.TrainService, ui_service_1.UIservice],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
