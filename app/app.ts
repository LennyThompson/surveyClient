import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { APP_BASE_HREF } from "@angular/common";
import { HttpModule } from "@angular/http";

import { HomeComponent }  from "./components/home/home";
import {AppMainRouter} from "./routes/app.routes";

import {SurveyModule} from "./components/survey/survey.module";

require("./app.scss");

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppMainRouter,
        SurveyModule
    ],
    declarations: [
        HomeComponent
    ],
    // providers: [
    //     {provide: APP_BASE_HREF, useValue : "/" }
    // ],
    bootstrap:    [ HomeComponent ]

})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

