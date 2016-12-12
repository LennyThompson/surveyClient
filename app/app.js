"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var card_1 = require("@angular2-material/card");
var icon_1 = require("@angular2-material/icon");
var input_1 = require("@angular2-material/input");
var toolbar_1 = require("@angular2-material/toolbar");
var button_1 = require("@angular2-material/button");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var webAPI_1 = require("./services/surveyDb/webAPI");
var home_1 = require("./components/home/home");
// import { routing, routedComponents } from "./routes/app.routes";
var survey_1 = require("./components/survey/survey");
var survey_list_1 = require("./components/survey/list/survey-list");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            card_1.MdCardModule.forRoot(),
            icon_1.MdIconModule.forRoot(),
            input_1.MdInputModule.forRoot(),
            toolbar_1.MdToolbarModule.forRoot(),
            button_1.MdButtonModule.forRoot()
        ],
        declarations: [
            home_1.HomeComponent,
            survey_list_1.SurveyListComponent,
            survey_1.SurveyComponent
        ],
        providers: [
            webAPI_1.HTTP_PROVIDERS,
            { provide: common_1.APP_BASE_HREF, useValue: "" }
        ],
        bootstrap: [home_1.HomeComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map