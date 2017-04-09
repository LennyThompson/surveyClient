"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var survey_image_form_1 = require("./survey-image/survey-image-form");
var add_survey_image_dialog_1 = require("./survey-image/add-dialog/add-survey-image-dialog");
var edit_survey_image_dialog_1 = require("./survey-image/edit-dialog/edit-survey-image-dialog");
var SurveyImage_1 = require("./survey-image/edit-provider/SurveyImage");
var projection_form_1 = require("./projection/projection-form");
var add_projection_dialog_1 = require("./projection/add-dialog/add-projection-dialog");
var edit_projection_dialog_1 = require("./projection/edit-dialog/edit-projection-dialog");
var Projection_1 = require("./projection/edit-provider/Projection");
var survey_reference_form_1 = require("./survey-reference/survey-reference-form");
var add_survey_reference_dialog_1 = require("./survey-reference/add-dialog/add-survey-reference-dialog");
var edit_survey_reference_dialog_1 = require("./survey-reference/edit-dialog/edit-survey-reference-dialog");
var SurveyReference_1 = require("./survey-reference/edit-provider/SurveyReference");
var survey_point_type_form_1 = require("./survey-point-type/survey-point-type-form");
var add_survey_point_type_dialog_1 = require("./survey-point-type/add-dialog/add-survey-point-type-dialog");
var edit_survey_point_type_dialog_1 = require("./survey-point-type/edit-dialog/edit-survey-point-type-dialog");
var SurveyPointType_1 = require("./survey-point-type/edit-provider/SurveyPointType");
var traverse_form_1 = require("./traverse/traverse-form");
var add_traverse_dialog_1 = require("./traverse/add-dialog/add-traverse-dialog");
var edit_traverse_dialog_1 = require("./traverse/edit-dialog/edit-traverse-dialog");
var Traverse_1 = require("./traverse/edit-provider/Traverse");
var survey_measurement_form_1 = require("./survey-measurement/survey-measurement-form");
var add_survey_measurement_dialog_1 = require("./survey-measurement/add-dialog/add-survey-measurement-dialog");
var edit_survey_measurement_dialog_1 = require("./survey-measurement/edit-dialog/edit-survey-measurement-dialog");
var SurveyMeasurement_1 = require("./survey-measurement/edit-provider/SurveyMeasurement");
var survey_point_form_1 = require("./survey-point/survey-point-form");
var add_survey_point_dialog_1 = require("./survey-point/add-dialog/add-survey-point-dialog");
var edit_survey_point_dialog_1 = require("./survey-point/edit-dialog/edit-survey-point-dialog");
var SurveyPoint_1 = require("./survey-point/edit-provider/SurveyPoint");
var instrument_manufacturer_form_1 = require("./instrument-manufacturer/instrument-manufacturer-form");
var add_instrument_manufacturer_dialog_1 = require("./instrument-manufacturer/add-dialog/add-instrument-manufacturer-dialog");
var edit_instrument_manufacturer_dialog_1 = require("./instrument-manufacturer/edit-dialog/edit-instrument-manufacturer-dialog");
var InstrumentManufacturer_1 = require("./instrument-manufacturer/edit-provider/InstrumentManufacturer");
var survey_form_1 = require("./survey/survey-form");
var add_survey_dialog_1 = require("./survey/add-dialog/add-survey-dialog");
var edit_survey_dialog_1 = require("./survey/edit-dialog/edit-survey-dialog");
var Survey_1 = require("./survey/edit-provider/Survey");
var instrument_form_1 = require("./instrument/instrument-form");
var add_instrument_dialog_1 = require("./instrument/add-dialog/add-instrument-dialog");
var edit_instrument_dialog_1 = require("./instrument/edit-dialog/edit-instrument-dialog");
var Instrument_1 = require("./instrument/edit-provider/Instrument");
exports.FORM_COMPONENTS = [
    survey_image_form_1.SurveyImageComponent,
    projection_form_1.ProjectionComponent,
    survey_reference_form_1.SurveyReferenceComponent,
    survey_point_type_form_1.SurveyPointTypeComponent,
    traverse_form_1.TraverseComponent,
    survey_measurement_form_1.SurveyMeasurementComponent,
    survey_point_form_1.SurveyPointComponent,
    instrument_manufacturer_form_1.InstrumentManufacturerComponent,
    survey_form_1.SurveyComponent,
    instrument_form_1.InstrumentComponent
];
exports.ENTRY_COMPONENTS = [
    add_survey_image_dialog_1.AddSurveyImageComponent,
    edit_survey_image_dialog_1.EditSurveyImageComponent,
    add_projection_dialog_1.AddProjectionComponent,
    edit_projection_dialog_1.EditProjectionComponent,
    add_survey_reference_dialog_1.AddSurveyReferenceComponent,
    edit_survey_reference_dialog_1.EditSurveyReferenceComponent,
    add_survey_point_type_dialog_1.AddSurveyPointTypeComponent,
    edit_survey_point_type_dialog_1.EditSurveyPointTypeComponent,
    add_traverse_dialog_1.AddTraverseComponent,
    edit_traverse_dialog_1.EditTraverseComponent,
    add_survey_measurement_dialog_1.AddSurveyMeasurementComponent,
    edit_survey_measurement_dialog_1.EditSurveyMeasurementComponent,
    add_survey_point_dialog_1.AddSurveyPointComponent,
    edit_survey_point_dialog_1.EditSurveyPointComponent,
    add_instrument_manufacturer_dialog_1.AddInstrumentManufacturerComponent,
    edit_instrument_manufacturer_dialog_1.EditInstrumentManufacturerComponent,
    add_survey_dialog_1.AddSurveyComponent,
    edit_survey_dialog_1.EditSurveyComponent,
    add_instrument_dialog_1.AddInstrumentComponent,
    edit_instrument_dialog_1.EditInstrumentComponent
];
exports.EDIT_PROVIDERS = [
    SurveyImage_1.EditSurveyImageProvider,
    Projection_1.EditProjectionProvider,
    SurveyReference_1.EditSurveyReferenceProvider,
    SurveyPointType_1.EditSurveyPointTypeProvider,
    Traverse_1.EditTraverseProvider,
    SurveyMeasurement_1.EditSurveyMeasurementProvider,
    SurveyPoint_1.EditSurveyPointProvider,
    InstrumentManufacturer_1.EditInstrumentManufacturerProvider,
    Survey_1.EditSurveyProvider,
    Instrument_1.EditInstrumentProvider
];
var survey_image_form_2 = require("./survey-image/survey-image-form");
exports.SurveyImageComponent = survey_image_form_2.SurveyImageComponent;
var add_survey_image_dialog_2 = require("./survey-image/add-dialog/add-survey-image-dialog");
exports.AddSurveyImageComponent = add_survey_image_dialog_2.AddSurveyImageComponent;
var edit_survey_image_dialog_2 = require("./survey-image/edit-dialog/edit-survey-image-dialog");
exports.EditSurveyImageComponent = edit_survey_image_dialog_2.EditSurveyImageComponent;
var SurveyImage_2 = require("./survey-image/edit-provider/SurveyImage");
exports.EditSurveyImageProvider = SurveyImage_2.EditSurveyImageProvider;
var projection_form_2 = require("./projection/projection-form");
exports.ProjectionComponent = projection_form_2.ProjectionComponent;
var add_projection_dialog_2 = require("./projection/add-dialog/add-projection-dialog");
exports.AddProjectionComponent = add_projection_dialog_2.AddProjectionComponent;
var edit_projection_dialog_2 = require("./projection/edit-dialog/edit-projection-dialog");
exports.EditProjectionComponent = edit_projection_dialog_2.EditProjectionComponent;
var Projection_2 = require("./projection/edit-provider/Projection");
exports.EditProjectionProvider = Projection_2.EditProjectionProvider;
var survey_reference_form_2 = require("./survey-reference/survey-reference-form");
exports.SurveyReferenceComponent = survey_reference_form_2.SurveyReferenceComponent;
var add_survey_reference_dialog_2 = require("./survey-reference/add-dialog/add-survey-reference-dialog");
exports.AddSurveyReferenceComponent = add_survey_reference_dialog_2.AddSurveyReferenceComponent;
var edit_survey_reference_dialog_2 = require("./survey-reference/edit-dialog/edit-survey-reference-dialog");
exports.EditSurveyReferenceComponent = edit_survey_reference_dialog_2.EditSurveyReferenceComponent;
var SurveyReference_2 = require("./survey-reference/edit-provider/SurveyReference");
exports.EditSurveyReferenceProvider = SurveyReference_2.EditSurveyReferenceProvider;
var survey_point_type_form_2 = require("./survey-point-type/survey-point-type-form");
exports.SurveyPointTypeComponent = survey_point_type_form_2.SurveyPointTypeComponent;
var add_survey_point_type_dialog_2 = require("./survey-point-type/add-dialog/add-survey-point-type-dialog");
exports.AddSurveyPointTypeComponent = add_survey_point_type_dialog_2.AddSurveyPointTypeComponent;
var edit_survey_point_type_dialog_2 = require("./survey-point-type/edit-dialog/edit-survey-point-type-dialog");
exports.EditSurveyPointTypeComponent = edit_survey_point_type_dialog_2.EditSurveyPointTypeComponent;
var SurveyPointType_2 = require("./survey-point-type/edit-provider/SurveyPointType");
exports.EditSurveyPointTypeProvider = SurveyPointType_2.EditSurveyPointTypeProvider;
var traverse_form_2 = require("./traverse/traverse-form");
exports.TraverseComponent = traverse_form_2.TraverseComponent;
var add_traverse_dialog_2 = require("./traverse/add-dialog/add-traverse-dialog");
exports.AddTraverseComponent = add_traverse_dialog_2.AddTraverseComponent;
var edit_traverse_dialog_2 = require("./traverse/edit-dialog/edit-traverse-dialog");
exports.EditTraverseComponent = edit_traverse_dialog_2.EditTraverseComponent;
var Traverse_2 = require("./traverse/edit-provider/Traverse");
exports.EditTraverseProvider = Traverse_2.EditTraverseProvider;
var survey_measurement_form_2 = require("./survey-measurement/survey-measurement-form");
exports.SurveyMeasurementComponent = survey_measurement_form_2.SurveyMeasurementComponent;
var add_survey_measurement_dialog_2 = require("./survey-measurement/add-dialog/add-survey-measurement-dialog");
exports.AddSurveyMeasurementComponent = add_survey_measurement_dialog_2.AddSurveyMeasurementComponent;
var edit_survey_measurement_dialog_2 = require("./survey-measurement/edit-dialog/edit-survey-measurement-dialog");
exports.EditSurveyMeasurementComponent = edit_survey_measurement_dialog_2.EditSurveyMeasurementComponent;
var SurveyMeasurement_2 = require("./survey-measurement/edit-provider/SurveyMeasurement");
exports.EditSurveyMeasurementProvider = SurveyMeasurement_2.EditSurveyMeasurementProvider;
var survey_point_form_2 = require("./survey-point/survey-point-form");
exports.SurveyPointComponent = survey_point_form_2.SurveyPointComponent;
var add_survey_point_dialog_2 = require("./survey-point/add-dialog/add-survey-point-dialog");
exports.AddSurveyPointComponent = add_survey_point_dialog_2.AddSurveyPointComponent;
var edit_survey_point_dialog_2 = require("./survey-point/edit-dialog/edit-survey-point-dialog");
exports.EditSurveyPointComponent = edit_survey_point_dialog_2.EditSurveyPointComponent;
var SurveyPoint_2 = require("./survey-point/edit-provider/SurveyPoint");
exports.EditSurveyPointProvider = SurveyPoint_2.EditSurveyPointProvider;
var instrument_manufacturer_form_2 = require("./instrument-manufacturer/instrument-manufacturer-form");
exports.InstrumentManufacturerComponent = instrument_manufacturer_form_2.InstrumentManufacturerComponent;
var add_instrument_manufacturer_dialog_2 = require("./instrument-manufacturer/add-dialog/add-instrument-manufacturer-dialog");
exports.AddInstrumentManufacturerComponent = add_instrument_manufacturer_dialog_2.AddInstrumentManufacturerComponent;
var edit_instrument_manufacturer_dialog_2 = require("./instrument-manufacturer/edit-dialog/edit-instrument-manufacturer-dialog");
exports.EditInstrumentManufacturerComponent = edit_instrument_manufacturer_dialog_2.EditInstrumentManufacturerComponent;
var InstrumentManufacturer_2 = require("./instrument-manufacturer/edit-provider/InstrumentManufacturer");
exports.EditInstrumentManufacturerProvider = InstrumentManufacturer_2.EditInstrumentManufacturerProvider;
var survey_form_2 = require("./survey/survey-form");
exports.SurveyComponent = survey_form_2.SurveyComponent;
var add_survey_dialog_2 = require("./survey/add-dialog/add-survey-dialog");
exports.AddSurveyComponent = add_survey_dialog_2.AddSurveyComponent;
var edit_survey_dialog_2 = require("./survey/edit-dialog/edit-survey-dialog");
exports.EditSurveyComponent = edit_survey_dialog_2.EditSurveyComponent;
var Survey_2 = require("./survey/edit-provider/Survey");
exports.EditSurveyProvider = Survey_2.EditSurveyProvider;
var instrument_form_2 = require("./instrument/instrument-form");
exports.InstrumentComponent = instrument_form_2.InstrumentComponent;
var add_instrument_dialog_2 = require("./instrument/add-dialog/add-instrument-dialog");
exports.AddInstrumentComponent = add_instrument_dialog_2.AddInstrumentComponent;
var edit_instrument_dialog_2 = require("./instrument/edit-dialog/edit-instrument-dialog");
exports.EditInstrumentComponent = edit_instrument_dialog_2.EditInstrumentComponent;
var Instrument_2 = require("./instrument/edit-provider/Instrument");
exports.EditInstrumentProvider = Instrument_2.EditInstrumentProvider;
//# sourceMappingURL=index.js.map