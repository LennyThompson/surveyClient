// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sat Feb 25 16:17:36 AEST 2017
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Projection_1 = require("./Projection");
var SurveyPoint_1 = require("./SurveyPoint");
var Instrument_1 = require("./Instrument");
var Traverse_1 = require("./Traverse");
var SurveyMeasurement_1 = require("./SurveyMeasurement");
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
// declare internal types
var Survey = (function () {
    function Survey() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";
        this.m_Projection = new Projection_1.Projection();
        this.m_SurveyPoint = [];
        this.m_Instrument = [];
        this.m_Traverse = [];
        this.m_SurveyMeasurement = [];
        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bProjectionUpdated = true;
        this.m_bSurveyPointUpdated = true;
        this.m_bInstrumentUpdated = true;
        this.m_bTraverseUpdated = true;
        this.m_bSurveyMeasurementUpdated = true;
    }
    Object.defineProperty(Survey.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "Name", {
        get: function () {
            return this.m_Name;
        },
        set: function (Name) {
            this.m_Name = Name;
            this.m_bNameUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "Description", {
        get: function () {
            return this.m_Description;
        },
        set: function (Description) {
            this.m_Description = Description;
            this.m_bDescriptionUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "Projection", {
        get: function () {
            return this.m_Projection;
        },
        set: function (Projection) {
            this.m_Projection = Projection;
            this.m_bProjectionUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "SurveyPoint", {
        get: function () {
            return this.m_SurveyPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "Instrument", {
        get: function () {
            return this.m_Instrument;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "Traverse", {
        get: function () {
            return this.m_Traverse;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Survey.prototype, "SurveyMeasurement", {
        get: function () {
            return this.m_SurveyMeasurement;
        },
        enumerable: true,
        configurable: true
    });
    Survey.prototype.addSurveyPoint = function (addSurveyPoint) {
        this.m_SurveyPoint.push(addSurveyPoint);
        this.m_bSurveyPointUpdated = true;
    };
    Survey.prototype.addInstrument = function (addInstrument) {
        this.m_Instrument.push(addInstrument);
        this.m_bInstrumentUpdated = true;
    };
    Survey.prototype.addTraverse = function (addTraverse) {
        this.m_Traverse.push(addTraverse);
        this.m_bTraverseUpdated = true;
    };
    Survey.prototype.addSurveyMeasurement = function (addSurveyMeasurement) {
        this.m_SurveyMeasurement.push(addSurveyMeasurement);
        this.m_bSurveyMeasurementUpdated = true;
    };
    Survey.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bNameUpdated) {
            objUpdated["Name"] = lodash(this.Name).isNil() ? null : this.m_Name;
        }
        if (this.m_bDescriptionUpdated) {
            objUpdated["Description"] = lodash(this.Description).isNil() ? null : this.m_Description;
        }
        if (this.m_bProjectionUpdated) {
            objUpdated["ProjectionID"] = lodash(this.Projection).isNil() ? null : this.m_Projection.toJsonObject();
        }
        if (this.m_bSurveyPointUpdated) {
            objUpdated["Survey_SurveyPoint"] = lodash(this.SurveyPoint).isNil() ? null : lodash(this.m_SurveyPoint).map(function (arrayMember) {
                return arrayMember.toJsonObject();
            });
        }
        if (this.m_bInstrumentUpdated) {
            objUpdated["Survey_Instrument"] = lodash(this.Instrument).isNil() ? null : lodash(this.m_Instrument).map(function (arrayMember) {
                return arrayMember.toJsonObject();
            });
        }
        if (this.m_bTraverseUpdated) {
            objUpdated["Survey_Traverse"] = lodash(this.Traverse).isNil() ? null : lodash(this.m_Traverse).map(function (arrayMember) {
                return arrayMember.toJsonObject();
            });
        }
        if (this.m_bSurveyMeasurementUpdated) {
            objUpdated["Survey_SurveyMeasurement"] = lodash(this.SurveyMeasurement).isNil() ? null : lodash(this.m_SurveyMeasurement).map(function (arrayMember) {
                return arrayMember.toJsonObject();
            });
        }
        return objUpdated;
    };
    Survey.prototype.setSaved = function () {
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bProjectionUpdated = false;
        this.m_bSurveyPointUpdated = false;
        this.m_bInstrumentUpdated = false;
        this.m_bTraverseUpdated = false;
        this.m_bSurveyMeasurementUpdated = false;
    };
    Survey.prototype.toFirebase = function () {
        var objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            ProjectionID: lodash(this.Projection).isNil() ? null : this.m_Projection.toFirebase(),
            Survey_SurveyPoint: lodash(this.SurveyPoint).isNil() ? null : lodash(this.m_SurveyPoint).map(function (arrayMember) {
                return arrayMember.toFirebase();
            }),
            Survey_Instrument: lodash(this.Instrument).isNil() ? null : lodash(this.m_Instrument).map(function (arrayMember) {
                return arrayMember.toFirebase();
            }),
            Survey_Traverse: lodash(this.Traverse).isNil() ? null : lodash(this.m_Traverse).map(function (arrayMember) {
                return arrayMember.toFirebase();
            }),
            Survey_SurveyMeasurement: lodash(this.SurveyMeasurement).isNil() ? null : lodash(this.m_SurveyMeasurement).map(function (arrayMember) {
                return arrayMember.toFirebase();
            })
        };
        return objFirebase;
    };
    Survey.fromFirebase = function (firebaseObj) {
        var objSurvey = new Survey();
        objSurvey.m_ID = firebaseObj.ID;
        objSurvey.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objSurvey.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objSurvey.m_Name = firebaseObj.Name;
        objSurvey.m_Description = firebaseObj.Description;
        objSurvey.m_Projection = Projection_1.Projection.fromFirebase(firebaseObj.ProjectionID);
        objSurvey.m_SurveyPoint = lodash.map(firebaseObj.Survey_SurveyPoint, function (arrayMember) {
            return SurveyPoint_1.SurveyPoint.fromFirebase(arrayMember);
        });
        objSurvey.m_Instrument = lodash.map(firebaseObj.Survey_Instrument, function (arrayMember) {
            return Instrument_1.Instrument.fromFirebase(arrayMember);
        });
        objSurvey.m_Traverse = lodash.map(firebaseObj.Survey_Traverse, function (arrayMember) {
            return Traverse_1.Traverse.fromFirebase(arrayMember);
        });
        objSurvey.m_SurveyMeasurement = lodash.map(firebaseObj.Survey_SurveyMeasurement, function (arrayMember) {
            return SurveyMeasurement_1.SurveyMeasurement.fromFirebase(arrayMember);
        });
        objSurvey.setSaved();
        return objSurvey;
    };
    // Generate static insterface to de-serialise from response JSON
    Survey.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objSurveyJson) { return Survey.fromJsonObject(objSurveyJson); });
    };
    Survey.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return Survey.fromJsonObject(objJson);
    };
    Survey.fromJsonObject = function (objJson) {
        var objSurvey = new Survey();
        objSurvey.m_ID = objJson.ID;
        objSurvey.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objSurvey.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objSurvey.m_Name = objJson.Name;
        objSurvey.m_Description = objJson.Description;
        objSurvey.m_Projection = Projection_1.Projection.fromJsonObject(objJson.ProjectionID);
        objSurvey.m_SurveyPoint = lodash.map(objJson.Survey_SurveyPoint, function (arrayMember) {
            return SurveyPoint_1.SurveyPoint.fromJsonObject(arrayMember);
        });
        objSurvey.m_Instrument = lodash.map(objJson.Survey_Instrument, function (arrayMember) {
            return Instrument_1.Instrument.fromJsonObject(arrayMember);
        });
        objSurvey.m_Traverse = lodash.map(objJson.Survey_Traverse, function (arrayMember) {
            return Traverse_1.Traverse.fromJsonObject(arrayMember);
        });
        objSurvey.m_SurveyMeasurement = lodash.map(objJson.Survey_SurveyMeasurement, function (arrayMember) {
            return SurveyMeasurement_1.SurveyMeasurement.fromJsonObject(arrayMember);
        });
        return objSurvey;
    };
    Survey.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    Survey.prototype.toJsonObject = function () {
        return {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            ProjectionID: lodash(this.Projection).isNil() ? null : this.m_Projection.toJsonObject(),
            Survey_SurveyPoint: lodash(this.SurveyPoint).isNil() ? null : lodash(this.m_SurveyPoint).map(function (arrayMember) {
                return arrayMember.toJsonObject();
            }),
            Survey_Instrument: lodash(this.Instrument).isNil() ? null : lodash(this.m_Instrument).map(function (arrayMember) {
                return arrayMember.toJsonObject();
            }),
            Survey_Traverse: lodash(this.Traverse).isNil() ? null : lodash(this.m_Traverse).map(function (arrayMember) {
                return arrayMember.toJsonObject();
            }),
            Survey_SurveyMeasurement: lodash(this.SurveyMeasurement).isNil() ? null : lodash(this.m_SurveyMeasurement).map(function (arrayMember) {
                return arrayMember.toJsonObject();
            })
        };
    };
    return Survey;
}());
exports.Survey = Survey;
//# sourceMappingURL=Survey.js.map