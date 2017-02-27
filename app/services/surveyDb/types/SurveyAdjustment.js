// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat Feb 25 16:17:36 AEST 2017
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SurveyMeasurement_1 = require("./SurveyMeasurement");
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
// declare internal types
var SurveyAdjustment = (function () {
    function SurveyAdjustment() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_DeltaX = 0;
        this.m_DeltaY = 0;
        this.m_DeltaZ = 0;
        this.m_BearingAdj = 0;
        this.m_Measurement = new SurveyMeasurement_1.SurveyMeasurement();
        this.m_bDeltaXUpdated = true;
        this.m_bDeltaYUpdated = true;
        this.m_bDeltaZUpdated = true;
        this.m_bBearingAdjUpdated = true;
        this.m_bMeasurementUpdated = true;
    }
    Object.defineProperty(SurveyAdjustment.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyAdjustment.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyAdjustment.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyAdjustment.prototype, "DeltaX", {
        get: function () {
            return this.m_DeltaX;
        },
        set: function (DeltaX) {
            this.m_DeltaX = DeltaX;
            this.m_bDeltaXUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyAdjustment.prototype, "DeltaY", {
        get: function () {
            return this.m_DeltaY;
        },
        set: function (DeltaY) {
            this.m_DeltaY = DeltaY;
            this.m_bDeltaYUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyAdjustment.prototype, "DeltaZ", {
        get: function () {
            return this.m_DeltaZ;
        },
        set: function (DeltaZ) {
            this.m_DeltaZ = DeltaZ;
            this.m_bDeltaZUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyAdjustment.prototype, "BearingAdj", {
        get: function () {
            return this.m_BearingAdj;
        },
        set: function (BearingAdj) {
            this.m_BearingAdj = BearingAdj;
            this.m_bBearingAdjUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyAdjustment.prototype, "Measurement", {
        get: function () {
            return this.m_Measurement;
        },
        set: function (Measurement) {
            this.m_Measurement = Measurement;
            this.m_bMeasurementUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    SurveyAdjustment.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bDeltaXUpdated) {
            objUpdated["DeltaX"] = lodash(this.DeltaX).isNil() ? null : this.m_DeltaX;
        }
        if (this.m_bDeltaYUpdated) {
            objUpdated["DeltaY"] = lodash(this.DeltaY).isNil() ? null : this.m_DeltaY;
        }
        if (this.m_bDeltaZUpdated) {
            objUpdated["DeltaZ"] = lodash(this.DeltaZ).isNil() ? null : this.m_DeltaZ;
        }
        if (this.m_bBearingAdjUpdated) {
            objUpdated["BearingAdj"] = lodash(this.BearingAdj).isNil() ? null : this.m_BearingAdj;
        }
        if (this.m_bMeasurementUpdated) {
            objUpdated["MeasurementID"] = lodash(this.Measurement).isNil() ? null : this.m_Measurement.toJsonObject();
        }
        return objUpdated;
    };
    SurveyAdjustment.prototype.setSaved = function () {
        this.m_bDeltaXUpdated = false;
        this.m_bDeltaYUpdated = false;
        this.m_bDeltaZUpdated = false;
        this.m_bBearingAdjUpdated = false;
        this.m_bMeasurementUpdated = false;
    };
    SurveyAdjustment.prototype.toFirebase = function () {
        var objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            DeltaX: lodash(this.DeltaX).isNil() ? null : this.m_DeltaX,
            DeltaY: lodash(this.DeltaY).isNil() ? null : this.m_DeltaY,
            DeltaZ: lodash(this.DeltaZ).isNil() ? null : this.m_DeltaZ,
            BearingAdj: lodash(this.BearingAdj).isNil() ? null : this.m_BearingAdj,
            MeasurementID: lodash(this.Measurement).isNil() ? null : this.m_Measurement.toFirebase()
        };
        return objFirebase;
    };
    SurveyAdjustment.fromFirebase = function (firebaseObj) {
        var objSurveyAdjustment = new SurveyAdjustment();
        objSurveyAdjustment.m_ID = firebaseObj.ID;
        objSurveyAdjustment.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objSurveyAdjustment.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objSurveyAdjustment.m_DeltaX = firebaseObj.DeltaX;
        objSurveyAdjustment.m_DeltaY = firebaseObj.DeltaY;
        objSurveyAdjustment.m_DeltaZ = firebaseObj.DeltaZ;
        objSurveyAdjustment.m_BearingAdj = firebaseObj.BearingAdj;
        objSurveyAdjustment.m_Measurement = SurveyMeasurement_1.SurveyMeasurement.fromFirebase(firebaseObj.MeasurementID);
        objSurveyAdjustment.setSaved();
        return objSurveyAdjustment;
    };
    // Generate static insterface to de-serialise from response JSON
    SurveyAdjustment.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objSurveyAdjustmentJson) { return SurveyAdjustment.fromJsonObject(objSurveyAdjustmentJson); });
    };
    SurveyAdjustment.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return SurveyAdjustment.fromJsonObject(objJson);
    };
    SurveyAdjustment.fromJsonObject = function (objJson) {
        var objSurveyAdjustment = new SurveyAdjustment();
        objSurveyAdjustment.m_ID = objJson.ID;
        objSurveyAdjustment.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objSurveyAdjustment.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objSurveyAdjustment.m_DeltaX = objJson.DeltaX;
        objSurveyAdjustment.m_DeltaY = objJson.DeltaY;
        objSurveyAdjustment.m_DeltaZ = objJson.DeltaZ;
        objSurveyAdjustment.m_BearingAdj = objJson.BearingAdj;
        objSurveyAdjustment.m_Measurement = SurveyMeasurement_1.SurveyMeasurement.fromJsonObject(objJson.MeasurementID);
        return objSurveyAdjustment;
    };
    SurveyAdjustment.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    SurveyAdjustment.prototype.toJsonObject = function () {
        return {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            DeltaX: lodash(this.DeltaX).isNil() ? null : this.m_DeltaX,
            DeltaY: lodash(this.DeltaY).isNil() ? null : this.m_DeltaY,
            DeltaZ: lodash(this.DeltaZ).isNil() ? null : this.m_DeltaZ,
            BearingAdj: lodash(this.BearingAdj).isNil() ? null : this.m_BearingAdj,
            MeasurementID: lodash(this.Measurement).isNil() ? null : this.m_Measurement.toJsonObject()
        };
    };
    return SurveyAdjustment;
}());
exports.SurveyAdjustment = SurveyAdjustment;
//# sourceMappingURL=SurveyAdjustment.js.map