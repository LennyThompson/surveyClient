"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add_traverse_1 = require("./add/add-traverse");
var edit_traverse_1 = require("./edit/edit-traverse");
var traverse_summary_1 = require("./summary/traverse-summary");
var travserse_summary_list_1 = require("./summary/list/travserse-summary-list");
var trav_measurement_1 = require("./summary/traverse-measurement-summary/trav-measurement");
exports.SURVEY_TRAVERSE_COMPONENTS = [
    add_traverse_1.AddTraverseComponent,
    edit_traverse_1.EditTraverseComponent,
    traverse_summary_1.TraverseSummaryComponent,
    travserse_summary_list_1.TravserseSummaryListComponent,
    trav_measurement_1.TraverseMeasurementSummaryComponent
];
var add_traverse_2 = require("./add/add-traverse");
exports.AddTraverseComponent = add_traverse_2.AddTraverseComponent;
var edit_traverse_2 = require("./edit/edit-traverse");
exports.EditTraverseComponent = edit_traverse_2.EditTraverseComponent;
var traverse_summary_2 = require("./summary/traverse-summary");
exports.TraverseSummaryComponent = traverse_summary_2.TraverseSummaryComponent;
var travserse_summary_list_2 = require("./summary/list/travserse-summary-list");
exports.TravserseSummaryListComponent = travserse_summary_list_2.TravserseSummaryListComponent;
var trav_measurement_2 = require("./summary/traverse-measurement-summary/trav-measurement");
exports.TraverseMeasurementSummaryComponent = trav_measurement_2.TraverseMeasurementSummaryComponent;
//# sourceMappingURL=index.js.map