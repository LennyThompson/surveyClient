import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./../components/home/home";

const appRoutes : Routes = [
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "prefix"
    }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [HomeComponent];
