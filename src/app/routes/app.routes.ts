import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./../components/home/home";
import {NgModule} from "@angular/core";

const appRoutes : Routes = [

  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "/surveys",
    pathMatch: "full"
  }
];

@NgModule (
  {
    imports: [
      RouterModule.forRoot(appRoutes)//, {useHash: true})
    ],
    exports: [
      RouterModule
    ]
  }
)
export class AppMainRouter {}
