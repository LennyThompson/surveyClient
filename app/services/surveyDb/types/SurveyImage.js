// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
// declare internal types
var SurveyImage = (function () {
    function SurveyImage() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Path = "";
        this.m_Description = "";
        this.m_SurveyID = 0;
        this.m_PointAtID = 0;
        this.m_bPathUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bPointAtIDUpdated = true;
    }
    Object.defineProperty(SurveyImage.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyImage.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyImage.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyImage.prototype, "Path", {
        get: function () {
            return this.m_Path;
        },
        set: function (Path) {
            this.m_Path = Path;
            this.m_bPathUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyImage.prototype, "Description", {
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
    Object.defineProperty(SurveyImage.prototype, "SurveyID", {
        get: function () {
            return this.m_SurveyID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyImage.prototype, "PointAtID", {
        get: function () {
            return this.m_PointAtID;
        },
        set: function (PointAtID) {
            this.m_PointAtID = PointAtID;
            this.m_bPointAtIDUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    SurveyImage.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bPathUpdated) {
            objUpdated["Path"] = lodash(this.Path).isNil() ? null : this.m_Path;
        }
        if (this.m_bDescriptionUpdated) {
            objUpdated["Description"] = lodash(this.Description).isNil() ? null : this.m_Description;
        }
        if (this.m_bPointAtIDUpdated) {
            objUpdated["PointAtID"] = lodash(this.PointAtID).isNil() ? null : this.m_PointAtID;
        }
        return objUpdated;
    };
    SurveyImage.prototype.setSaved = function () {
        this.m_bPathUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bPointAtIDUpdated = false;
    };
    SurveyImage.prototype.toFirebase = function () {
        var objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Path: lodash(this.Path).isNil() ? null : this.m_Path,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            SurveyID: lodash(this.SurveyID).isNil() ? null : this.m_SurveyID,
            PointAtID: lodash(this.PointAtID).isNil() ? null : this.m_PointAtID
        };
        return objFirebase;
    };
    SurveyImage.fromFirebase = function (firebaseObj) {
        var objSurveyImage = new SurveyImage();
        objSurveyImage.m_ID = firebaseObj.ID;
        objSurveyImage.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objSurveyImage.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objSurveyImage.m_Path = firebaseObj.Path;
        objSurveyImage.m_Description = firebaseObj.Description;
        objSurveyImage.m_SurveyID = firebaseObj.SurveyID;
        objSurveyImage.m_PointAtID = firebaseObj.PointAtID;
        objSurveyImage.setSaved();
        return objSurveyImage;
    };
    // Generate static insterface to de-serialise from response JSON
    SurveyImage.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objSurveyImageJson) { return SurveyImage.fromJsonObject(objSurveyImageJson); });
    };
    SurveyImage.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return SurveyImage.fromJsonObject(objJson);
    };
    SurveyImage.fromJsonObject = function (objJson) {
        var objSurveyImage = new SurveyImage();
        objSurveyImage.m_ID = objJson.ID;
        objSurveyImage.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objSurveyImage.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objSurveyImage.m_Path = objJson.Path;
        objSurveyImage.m_Description = objJson.Description;
        objSurveyImage.m_SurveyID = objJson.SurveyID;
        objSurveyImage.m_PointAtID = objJson.PointAtID;
        return objSurveyImage;
    };
    SurveyImage.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    SurveyImage.prototype.toJsonObject = function () {
        return {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Path: lodash(this.Path).isNil() ? null : this.m_Path,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            SurveyID: lodash(this.SurveyID).isNil() ? null : this.m_SurveyID,
            PointAtID: lodash(this.PointAtID).isNil() ? null : this.m_PointAtID
        };
    };
    return SurveyImage;
}());
exports.SurveyImage = SurveyImage;
//# sourceMappingURL=SurveyImage.js.map