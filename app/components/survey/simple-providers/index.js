"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var survey_image_1 = require("./survey-image");
var survey_summary_1 = require("./survey-summary");
var projection_1 = require("./projection");
var survey_reference_1 = require("./survey-reference");
var survey_point_type_1 = require("./survey-point-type");
var traverse_1 = require("./traverse");
var survey_measurement_1 = require("./survey-measurement");
var survey_point_1 = require("./survey-point");
var survey_adjustment_1 = require("./survey-adjustment");
var traverse_measurement_summary_1 = require("./traverse-measurement-summary");
var survey_point_summary_1 = require("./survey-point-summary");
var instrument_manufacturer_1 = require("./instrument-manufacturer");
var traverse_closure_1 = require("./traverse-closure");
var survey_1 = require("./survey");
var instrument_1 = require("./instrument");
var traverse_summary_1 = require("./traverse-summary");
exports.SIMPLE_PROVIDER_COMPONENTS = [
    survey_image_1.CurrentSurveyImageProvider, survey_image_1.CurrentSurveyImageListProvider,
    survey_summary_1.CurrentSurveySummaryProvider, survey_summary_1.CurrentSurveySummaryListProvider,
    projection_1.CurrentProjectionProvider, projection_1.CurrentProjectionListProvider,
    survey_reference_1.CurrentSurveyReferenceProvider, survey_reference_1.CurrentSurveyReferenceListProvider,
    survey_point_type_1.CurrentSurveyPointTypeProvider, survey_point_type_1.CurrentSurveyPointTypeListProvider,
    traverse_1.CurrentTraverseProvider, traverse_1.CurrentTraverseListProvider,
    survey_measurement_1.CurrentSurveyMeasurementProvider, survey_measurement_1.CurrentSurveyMeasurementListProvider,
    survey_point_1.CurrentSurveyPointProvider, survey_point_1.CurrentSurveyPointListProvider,
    survey_adjustment_1.CurrentSurveyAdjustmentProvider, survey_adjustment_1.CurrentSurveyAdjustmentListProvider,
    traverse_measurement_summary_1.CurrentTraverseMeasurementSummaryProvider, traverse_measurement_summary_1.CurrentTraverseMeasurementSummaryListProvider,
    survey_point_summary_1.CurrentSurveyPointSummaryProvider, survey_point_summary_1.CurrentSurveyPointSummaryListProvider,
    instrument_manufacturer_1.CurrentInstrumentManufacturerProvider, instrument_manufacturer_1.CurrentInstrumentManufacturerListProvider,
    traverse_closure_1.CurrentTraverseClosureProvider, traverse_closure_1.CurrentTraverseClosureListProvider,
    survey_1.CurrentSurveyProvider, survey_1.CurrentSurveyListProvider,
    instrument_1.CurrentInstrumentProvider, instrument_1.CurrentInstrumentListProvider,
    traverse_summary_1.CurrentTraverseSummaryProvider, traverse_summary_1.CurrentTraverseSummaryListProvider
];
exports.EDIT_PROVIDER_COMPONENTS = [
    survey_image_1.EditSurveyImageProvider,
    projection_1.EditProjectionProvider,
    survey_reference_1.EditSurveyReferenceProvider,
    survey_point_type_1.EditSurveyPointTypeProvider,
    traverse_1.EditTraverseProvider,
    survey_measurement_1.EditSurveyMeasurementProvider,
    survey_point_1.EditSurveyPointProvider,
    instrument_manufacturer_1.EditInstrumentManufacturerProvider,
    survey_1.EditSurveyProvider,
    instrument_1.EditInstrumentProvider
];
var survey_image_2 = require("./survey-image");
exports.CurrentSurveyImageProvider = survey_image_2.CurrentSurveyImageProvider;
exports.CurrentSurveyImageListProvider = survey_image_2.CurrentSurveyImageListProvider;
exports.EditSurveyImageProvider = survey_image_2.EditSurveyImageProvider;
var survey_summary_2 = require("./survey-summary");
exports.CurrentSurveySummaryProvider = survey_summary_2.CurrentSurveySummaryProvider;
exports.CurrentSurveySummaryListProvider = survey_summary_2.CurrentSurveySummaryListProvider;
var projection_2 = require("./projection");
exports.CurrentProjectionProvider = projection_2.CurrentProjectionProvider;
exports.CurrentProjectionListProvider = projection_2.CurrentProjectionListProvider;
exports.EditProjectionProvider = projection_2.EditProjectionProvider;
var survey_reference_2 = require("./survey-reference");
exports.CurrentSurveyReferenceProvider = survey_reference_2.CurrentSurveyReferenceProvider;
exports.CurrentSurveyReferenceListProvider = survey_reference_2.CurrentSurveyReferenceListProvider;
exports.EditSurveyReferenceProvider = survey_reference_2.EditSurveyReferenceProvider;
var survey_point_type_2 = require("./survey-point-type");
exports.CurrentSurveyPointTypeProvider = survey_point_type_2.CurrentSurveyPointTypeProvider;
exports.CurrentSurveyPointTypeListProvider = survey_point_type_2.CurrentSurveyPointTypeListProvider;
exports.EditSurveyPointTypeProvider = survey_point_type_2.EditSurveyPointTypeProvider;
var traverse_2 = require("./traverse");
exports.CurrentTraverseProvider = traverse_2.CurrentTraverseProvider;
exports.CurrentTraverseListProvider = traverse_2.CurrentTraverseListProvider;
exports.EditTraverseProvider = traverse_2.EditTraverseProvider;
var survey_measurement_2 = require("./survey-measurement");
exports.CurrentSurveyMeasurementProvider = survey_measurement_2.CurrentSurveyMeasurementProvider;
exports.CurrentSurveyMeasurementListProvider = survey_measurement_2.CurrentSurveyMeasurementListProvider;
exports.EditSurveyMeasurementProvider = survey_measurement_2.EditSurveyMeasurementProvider;
var survey_point_2 = require("./survey-point");
exports.CurrentSurveyPointProvider = survey_point_2.CurrentSurveyPointProvider;
exports.CurrentSurveyPointListProvider = survey_point_2.CurrentSurveyPointListProvider;
exports.EditSurveyPointProvider = survey_point_2.EditSurveyPointProvider;
var survey_adjustment_2 = require("./survey-adjustment");
exports.CurrentSurveyAdjustmentProvider = survey_adjustment_2.CurrentSurveyAdjustmentProvider;
exports.CurrentSurveyAdjustmentListProvider = survey_adjustment_2.CurrentSurveyAdjustmentListProvider;
var traverse_measurement_summary_2 = require("./traverse-measurement-summary");
exports.CurrentTraverseMeasurementSummaryProvider = traverse_measurement_summary_2.CurrentTraverseMeasurementSummaryProvider;
exports.CurrentTraverseMeasurementSummaryListProvider = traverse_measurement_summary_2.CurrentTraverseMeasurementSummaryListProvider;
var survey_point_summary_2 = require("./survey-point-summary");
exports.CurrentSurveyPointSummaryProvider = survey_point_summary_2.CurrentSurveyPointSummaryProvider;
exports.CurrentSurveyPointSummaryListProvider = survey_point_summary_2.CurrentSurveyPointSummaryListProvider;
var instrument_manufacturer_2 = require("./instrument-manufacturer");
exports.CurrentInstrumentManufacturerProvider = instrument_manufacturer_2.CurrentInstrumentManufacturerProvider;
exports.CurrentInstrumentManufacturerListProvider = instrument_manufacturer_2.CurrentInstrumentManufacturerListProvider;
exports.EditInstrumentManufacturerProvider = instrument_manufacturer_2.EditInstrumentManufacturerProvider;
var traverse_closure_2 = require("./traverse-closure");
exports.CurrentTraverseClosureProvider = traverse_closure_2.CurrentTraverseClosureProvider;
exports.CurrentTraverseClosureListProvider = traverse_closure_2.CurrentTraverseClosureListProvider;
var survey_2 = require("./survey");
exports.CurrentSurveyProvider = survey_2.CurrentSurveyProvider;
exports.CurrentSurveyListProvider = survey_2.CurrentSurveyListProvider;
exports.EditSurveyProvider = survey_2.EditSurveyProvider;
var instrument_2 = require("./instrument");
exports.CurrentInstrumentProvider = instrument_2.CurrentInstrumentProvider;
exports.CurrentInstrumentListProvider = instrument_2.CurrentInstrumentListProvider;
exports.EditInstrumentProvider = instrument_2.EditInstrumentProvider;
var traverse_summary_2 = require("./traverse-summary");
exports.CurrentTraverseSummaryProvider = traverse_summary_2.CurrentTraverseSummaryProvider;
exports.CurrentTraverseSummaryListProvider = traverse_summary_2.CurrentTraverseSummaryListProvider;
//# sourceMappingURL=index.js.map