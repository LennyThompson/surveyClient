import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './components/home/home';
import {SurveyModule} from "./components/survey/survey.module";
import {AppMainRouter} from "./routes/app.routes";
import {Router} from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SurveyModule,
    AppMainRouter
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule {
  constructor(private router: Router)
  {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
