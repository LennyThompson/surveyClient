import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./../components/home/home";
import {NgModule} from "@angular/core";

const appRoutes : Routes = [
    {
        path: "",
        redirectTo: "surveys",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    }
];

@NgModule (
    {
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [
            RouterModule
        ]
    }
)
export class AppMainRouter {}
