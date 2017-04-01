"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SurveyAdjustmentServiceHttp_1 = require("./SurveyAdjustmentServiceHttp");
var SurveySummaryServiceHttp_1 = require("./SurveySummaryServiceHttp");
var TraverseServiceHttp_1 = require("./TraverseServiceHttp");
var TraverseSummaryServiceHttp_1 = require("./TraverseSummaryServiceHttp");
var TraverseMeasurementSummaryServiceHttp_1 = require("./TraverseMeasurementSummaryServiceHttp");
var SurveyPointServiceHttp_1 = require("./SurveyPointServiceHttp");
var InstrumentManufacturerServiceHttp_1 = require("./InstrumentManufacturerServiceHttp");
var SurveyPointTypeServiceHttp_1 = require("./SurveyPointTypeServiceHttp");
var InstrumentServiceHttp_1 = require("./InstrumentServiceHttp");
var ProjectionServiceHttp_1 = require("./ProjectionServiceHttp");
var SurveyImageServiceHttp_1 = require("./SurveyImageServiceHttp");
var SurveyMeasurementServiceHttp_1 = require("./SurveyMeasurementServiceHttp");
var TraverseClosureServiceHttp_1 = require("./TraverseClosureServiceHttp");
var SurveyReferenceServiceHttp_1 = require("./SurveyReferenceServiceHttp");
var SurveyServiceHttp_1 = require("./SurveyServiceHttp");
var SurveyPointSummaryServiceHttp_1 = require("./SurveyPointSummaryServiceHttp");
exports.HTTP_PROVIDERS = [
    SurveyAdjustmentServiceHttp_1.SurveyAdjustmentServiceHttp,
    SurveySummaryServiceHttp_1.SurveySummaryServiceHttp,
    TraverseServiceHttp_1.TraverseServiceHttp,
    TraverseSummaryServiceHttp_1.TraverseSummaryServiceHttp,
    TraverseMeasurementSummaryServiceHttp_1.TraverseMeasurementSummaryServiceHttp,
    SurveyPointServiceHttp_1.SurveyPointServiceHttp,
    InstrumentManufacturerServiceHttp_1.InstrumentManufacturerServiceHttp,
    SurveyPointTypeServiceHttp_1.SurveyPointTypeServiceHttp,
    InstrumentServiceHttp_1.InstrumentServiceHttp,
    ProjectionServiceHttp_1.ProjectionServiceHttp,
    SurveyImageServiceHttp_1.SurveyImageServiceHttp,
    SurveyMeasurementServiceHttp_1.SurveyMeasurementServiceHttp,
    TraverseClosureServiceHttp_1.TraverseClosureServiceHttp,
    SurveyReferenceServiceHttp_1.SurveyReferenceServiceHttp,
    SurveyServiceHttp_1.SurveyServiceHttp,
    SurveyPointSummaryServiceHttp_1.SurveyPointSummaryServiceHttp
];
exports.SUBJECT_PROVIDERS = [
    SurveyAdjustmentServiceHttp_1.SurveyAdjustmentSubjectProvider,
    SurveySummaryServiceHttp_1.SurveySummarySubjectProvider,
    TraverseServiceHttp_1.TraverseSubjectProvider,
    TraverseSummaryServiceHttp_1.TraverseSummarySubjectProvider,
    TraverseMeasurementSummaryServiceHttp_1.TraverseMeasurementSummarySubjectProvider,
    SurveyPointServiceHttp_1.SurveyPointSubjectProvider,
    InstrumentManufacturerServiceHttp_1.InstrumentManufacturerSubjectProvider,
    SurveyPointTypeServiceHttp_1.SurveyPointTypeSubjectProvider,
    InstrumentServiceHttp_1.InstrumentSubjectProvider,
    ProjectionServiceHttp_1.ProjectionSubjectProvider,
    SurveyImageServiceHttp_1.SurveyImageSubjectProvider,
    SurveyMeasurementServiceHttp_1.SurveyMeasurementSubjectProvider,
    TraverseClosureServiceHttp_1.TraverseClosureSubjectProvider,
    SurveyReferenceServiceHttp_1.SurveyReferenceSubjectProvider,
    SurveyServiceHttp_1.SurveySubjectProvider,
    SurveyPointSummaryServiceHttp_1.SurveyPointSummarySubjectProvider
];
var SurveyAdjustmentServiceHttp_2 = require("./SurveyAdjustmentServiceHttp");
exports.SurveyAdjustmentServiceHttp = SurveyAdjustmentServiceHttp_2.SurveyAdjustmentServiceHttp;
exports.SurveyAdjustmentSubjectProvider = SurveyAdjustmentServiceHttp_2.SurveyAdjustmentSubjectProvider;
var SurveySummaryServiceHttp_2 = require("./SurveySummaryServiceHttp");
exports.SurveySummaryServiceHttp = SurveySummaryServiceHttp_2.SurveySummaryServiceHttp;
exports.SurveySummarySubjectProvider = SurveySummaryServiceHttp_2.SurveySummarySubjectProvider;
var TraverseServiceHttp_2 = require("./TraverseServiceHttp");
exports.TraverseServiceHttp = TraverseServiceHttp_2.TraverseServiceHttp;
exports.TraverseSubjectProvider = TraverseServiceHttp_2.TraverseSubjectProvider;
var TraverseSummaryServiceHttp_2 = require("./TraverseSummaryServiceHttp");
exports.TraverseSummaryServiceHttp = TraverseSummaryServiceHttp_2.TraverseSummaryServiceHttp;
exports.TraverseSummarySubjectProvider = TraverseSummaryServiceHttp_2.TraverseSummarySubjectProvider;
var TraverseMeasurementSummaryServiceHttp_2 = require("./TraverseMeasurementSummaryServiceHttp");
exports.TraverseMeasurementSummaryServiceHttp = TraverseMeasurementSummaryServiceHttp_2.TraverseMeasurementSummaryServiceHttp;
exports.TraverseMeasurementSummarySubjectProvider = TraverseMeasurementSummaryServiceHttp_2.TraverseMeasurementSummarySubjectProvider;
var SurveyPointServiceHttp_2 = require("./SurveyPointServiceHttp");
exports.SurveyPointServiceHttp = SurveyPointServiceHttp_2.SurveyPointServiceHttp;
exports.SurveyPointSubjectProvider = SurveyPointServiceHttp_2.SurveyPointSubjectProvider;
var InstrumentManufacturerServiceHttp_2 = require("./InstrumentManufacturerServiceHttp");
exports.InstrumentManufacturerServiceHttp = InstrumentManufacturerServiceHttp_2.InstrumentManufacturerServiceHttp;
exports.InstrumentManufacturerSubjectProvider = InstrumentManufacturerServiceHttp_2.InstrumentManufacturerSubjectProvider;
var SurveyPointTypeServiceHttp_2 = require("./SurveyPointTypeServiceHttp");
exports.SurveyPointTypeServiceHttp = SurveyPointTypeServiceHttp_2.SurveyPointTypeServiceHttp;
exports.SurveyPointTypeSubjectProvider = SurveyPointTypeServiceHttp_2.SurveyPointTypeSubjectProvider;
var InstrumentServiceHttp_2 = require("./InstrumentServiceHttp");
exports.InstrumentServiceHttp = InstrumentServiceHttp_2.InstrumentServiceHttp;
exports.InstrumentSubjectProvider = InstrumentServiceHttp_2.InstrumentSubjectProvider;
var ProjectionServiceHttp_2 = require("./ProjectionServiceHttp");
exports.ProjectionServiceHttp = ProjectionServiceHttp_2.ProjectionServiceHttp;
exports.ProjectionSubjectProvider = ProjectionServiceHttp_2.ProjectionSubjectProvider;
var SurveyImageServiceHttp_2 = require("./SurveyImageServiceHttp");
exports.SurveyImageServiceHttp = SurveyImageServiceHttp_2.SurveyImageServiceHttp;
exports.SurveyImageSubjectProvider = SurveyImageServiceHttp_2.SurveyImageSubjectProvider;
var SurveyMeasurementServiceHttp_2 = require("./SurveyMeasurementServiceHttp");
exports.SurveyMeasurementServiceHttp = SurveyMeasurementServiceHttp_2.SurveyMeasurementServiceHttp;
exports.SurveyMeasurementSubjectProvider = SurveyMeasurementServiceHttp_2.SurveyMeasurementSubjectProvider;
var TraverseClosureServiceHttp_2 = require("./TraverseClosureServiceHttp");
exports.TraverseClosureServiceHttp = TraverseClosureServiceHttp_2.TraverseClosureServiceHttp;
exports.TraverseClosureSubjectProvider = TraverseClosureServiceHttp_2.TraverseClosureSubjectProvider;
var SurveyReferenceServiceHttp_2 = require("./SurveyReferenceServiceHttp");
exports.SurveyReferenceServiceHttp = SurveyReferenceServiceHttp_2.SurveyReferenceServiceHttp;
exports.SurveyReferenceSubjectProvider = SurveyReferenceServiceHttp_2.SurveyReferenceSubjectProvider;
var SurveyServiceHttp_2 = require("./SurveyServiceHttp");
exports.SurveyServiceHttp = SurveyServiceHttp_2.SurveyServiceHttp;
exports.SurveySubjectProvider = SurveyServiceHttp_2.SurveySubjectProvider;
var SurveyPointSummaryServiceHttp_2 = require("./SurveyPointSummaryServiceHttp");
exports.SurveyPointSummaryServiceHttp = SurveyPointSummaryServiceHttp_2.SurveyPointSummaryServiceHttp;
exports.SurveyPointSummarySubjectProvider = SurveyPointSummaryServiceHttp_2.SurveyPointSummarySubjectProvider;
//# sourceMappingURL=index.js.map