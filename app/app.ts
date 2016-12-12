import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { MdCardModule } from "@angular2-material/card";
import { MdIconModule } from "@angular2-material/icon";
import { MdInputModule } from "@angular2-material/input";
import { MdToolbarModule } from "@angular2-material/toolbar";
import { MdButtonModule } from "@angular2-material/button";
import { APP_BASE_HREF } from "@angular/common";
import { HttpModule } from "@angular/http";

import { HTTP_PROVIDERS } from "./services/surveyDb/webAPI";

import { HomeComponent }  from "./components/home/home";
// import { routing, routedComponents } from "./routes/app.routes";
import {SurveyComponent} from "./components/survey/survey";
import {SurveyListComponent} from "./components/survey/list/survey-list";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdCardModule.forRoot(),
        MdIconModule.forRoot(),
        MdInputModule.forRoot(),
        MdToolbarModule.forRoot(),
        MdButtonModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        SurveyListComponent,
        SurveyComponent
    ],
    providers: [
        HTTP_PROVIDERS,
        {provide: APP_BASE_HREF, useValue : "" }
    ],
    bootstrap:    [ HomeComponent ]

})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

