"use strict";
var router_1 = require("@angular/router");
var home_1 = require("./../components/home/home");
var appRoutes = [
    {
        path: "home",
        component: home_1.HomeComponent
    },
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "prefix"
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [home_1.HomeComponent];
//# sourceMappingURL=app.routes.js.map