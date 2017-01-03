// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Mon Jan 02 18:28:05 AEST 2017
"use strict";
var SurveyPoint_1 = require("./SurveyPoint");
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
// declare internal types
var SurveyMeasurement = (function () {
    function SurveyMeasurement() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_HorizDistance = 0;
        this.m_VertDistance = 0;
        this.m_Bearing = 0;
        this.m_PointFrom = new SurveyPoint_1.SurveyPoint();
        this.m_PointTo = new SurveyPoint_1.SurveyPoint();
        this.m_SurveyID = 0;
        this.m_bHorizDistanceUpdated = true;
        this.m_bVertDistanceUpdated = true;
        this.m_bBearingUpdated = true;
        this.m_bPointFromUpdated = true;
        this.m_bPointToUpdated = true;
        this.m_bSurveyIDUpdated = true;
    }
    Object.defineProperty(SurveyMeasurement.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyMeasurement.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyMeasurement.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyMeasurement.prototype, "HorizDistance", {
        get: function () {
            return this.m_HorizDistance;
        },
        set: function (HorizDistance) {
            this.m_HorizDistance = HorizDistance;
            this.m_bHorizDistanceUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyMeasurement.prototype, "VertDistance", {
        get: function () {
            return this.m_VertDistance;
        },
        set: function (VertDistance) {
            this.m_VertDistance = VertDistance;
            this.m_bVertDistanceUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyMeasurement.prototype, "Bearing", {
        get: function () {
            return this.m_Bearing;
        },
        set: function (Bearing) {
            this.m_Bearing = Bearing;
            this.m_bBearingUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyMeasurement.prototype, "PointFrom", {
        get: function () {
            return this.m_PointFrom;
        },
        set: function (PointFrom) {
            this.m_PointFrom = PointFrom;
            this.m_bPointFromUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyMeasurement.prototype, "PointTo", {
        get: function () {
            return this.m_PointTo;
        },
        set: function (PointTo) {
            this.m_PointTo = PointTo;
            this.m_bPointToUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyMeasurement.prototype, "SurveyID", {
        get: function () {
            return this.m_SurveyID;
        },
        set: function (SurveyID) {
            this.m_SurveyID = SurveyID;
            this.m_bSurveyIDUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    SurveyMeasurement.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bHorizDistanceUpdated) {
            objUpdated["HorizDistance"] = this.m_HorizDistance;
        }
        if (this.m_bVertDistanceUpdated) {
            objUpdated["VertDistance"] = this.m_VertDistance;
        }
        if (this.m_bBearingUpdated) {
            objUpdated["Bearing"] = this.m_Bearing;
        }
        if (this.m_bPointFromUpdated) {
            objUpdated["FromPtID"] = this.m_PointFrom.toJsonObject();
        }
        if (this.m_bPointToUpdated) {
            objUpdated["ToPtID"] = this.m_PointTo.toJsonObject();
        }
        if (this.m_bSurveyIDUpdated) {
            objUpdated["SurveyID"] = this.m_SurveyID;
        }
        return objUpdated;
    };
    SurveyMeasurement.prototype.setSaved = function () {
        this.m_bHorizDistanceUpdated = false;
        this.m_bVertDistanceUpdated = false;
        this.m_bBearingUpdated = false;
        this.m_bPointFromUpdated = false;
        this.m_bPointToUpdated = false;
        this.m_bSurveyIDUpdated = false;
    };
    SurveyMeasurement.prototype.toFirebase = function () {
        var objFirebase = {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            HorizDistance: this.m_HorizDistance,
            VertDistance: this.m_VertDistance,
            Bearing: this.m_Bearing,
            FromPtID: this.m_PointFrom.toFirebase(),
            ToPtID: this.m_PointTo.toFirebase(),
            SurveyID: this.m_SurveyID
        };
        return objFirebase;
    };
    SurveyMeasurement.fromFirebase = function (firebaseObj) {
        var objSurveyMeasurement = new SurveyMeasurement();
        objSurveyMeasurement.m_ID = firebaseObj.ID;
        objSurveyMeasurement.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objSurveyMeasurement.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objSurveyMeasurement.m_HorizDistance = firebaseObj.HorizDistance;
        objSurveyMeasurement.m_VertDistance = firebaseObj.VertDistance;
        objSurveyMeasurement.m_Bearing = firebaseObj.Bearing;
        objSurveyMeasurement.m_PointFrom = SurveyPoint_1.SurveyPoint.fromFirebase(firebaseObj.FromPtID);
        objSurveyMeasurement.m_PointTo = SurveyPoint_1.SurveyPoint.fromFirebase(firebaseObj.ToPtID);
        objSurveyMeasurement.m_SurveyID = firebaseObj.SurveyID;
        objSurveyMeasurement.setSaved();
        return objSurveyMeasurement;
    };
    // Generate static insterface to de-serialise from response JSON
    SurveyMeasurement.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objSurveyMeasurementJson) { return SurveyMeasurement.fromJsonObject(objSurveyMeasurementJson); });
    };
    SurveyMeasurement.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return SurveyMeasurement.fromJsonObject(objJson);
    };
    SurveyMeasurement.fromJsonObject = function (objJson) {
        var objSurveyMeasurement = new SurveyMeasurement();
        objSurveyMeasurement.m_ID = objJson.ID;
        objSurveyMeasurement.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objSurveyMeasurement.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objSurveyMeasurement.m_HorizDistance = objJson.HorizDistance;
        objSurveyMeasurement.m_VertDistance = objJson.VertDistance;
        objSurveyMeasurement.m_Bearing = objJson.Bearing;
        objSurveyMeasurement.m_PointFrom = SurveyPoint_1.SurveyPoint.fromJsonObject(objJson.FromPtID);
        objSurveyMeasurement.m_PointTo = SurveyPoint_1.SurveyPoint.fromJsonObject(objJson.ToPtID);
        objSurveyMeasurement.m_SurveyID = objJson.SurveyID;
        return objSurveyMeasurement;
    };
    SurveyMeasurement.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    SurveyMeasurement.prototype.toJsonObject = function () {
        return {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            HorizDistance: this.m_HorizDistance,
            VertDistance: this.m_VertDistance,
            Bearing: this.m_Bearing,
            FromPtID: this.m_PointFrom.toJsonObject(),
            ToPtID: this.m_PointTo.toJsonObject(),
            SurveyID: this.m_SurveyID
        };
    };
    return SurveyMeasurement;
}());
exports.SurveyMeasurement = SurveyMeasurement;
//# sourceMappingURL=SurveyMeasurement.js.map