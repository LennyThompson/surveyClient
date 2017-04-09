// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Apr 09 17:23:47 AEST 2017
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
// declare internal types
var SurveyReference = (function () {
    function SurveyReference() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";
        this.m_Date = new Date();
        this.m_Reference = "";
        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bDateUpdated = true;
        this.m_bReferenceUpdated = true;
    }
    Object.defineProperty(SurveyReference.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyReference.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyReference.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyReference.prototype, "Name", {
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
    Object.defineProperty(SurveyReference.prototype, "Description", {
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
    Object.defineProperty(SurveyReference.prototype, "Date", {
        get: function () {
            return this.m_Date;
        },
        set: function (Date) {
            this.m_Date = Date;
            this.m_bDateUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyReference.prototype, "Reference", {
        get: function () {
            return this.m_Reference;
        },
        set: function (Reference) {
            this.m_Reference = Reference;
            this.m_bReferenceUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    SurveyReference.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bNameUpdated) {
            objUpdated["Name"] = lodash(this.Name).isNil() ? null : this.m_Name;
        }
        if (this.m_bDescriptionUpdated) {
            objUpdated["Description"] = lodash(this.Description).isNil() ? null : this.m_Description;
        }
        if (this.m_bDateUpdated) {
            objUpdated["Date"] = lodash(this.Date).isNil() ? null : this.m_Date.toISOString();
        }
        if (this.m_bReferenceUpdated) {
            objUpdated["Reference"] = lodash(this.Reference).isNil() ? null : this.m_Reference;
        }
        return objUpdated;
    };
    SurveyReference.prototype.setSaved = function () {
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bDateUpdated = false;
        this.m_bReferenceUpdated = false;
    };
    SurveyReference.prototype.toFirebase = function () {
        var objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            Date: lodash(this.Date).isNil() ? null : this.m_Date.toISOString(),
            Reference: lodash(this.Reference).isNil() ? null : this.m_Reference
        };
        return objFirebase;
    };
    SurveyReference.fromFirebase = function (firebaseObj) {
        var objSurveyReference = new SurveyReference();
        objSurveyReference.m_ID = firebaseObj.ID;
        objSurveyReference.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objSurveyReference.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objSurveyReference.m_Name = firebaseObj.Name;
        objSurveyReference.m_Description = firebaseObj.Description;
        objSurveyReference.m_Date = TimeConversion_1.TimeConversion.toDate(firebaseObj.Date);
        objSurveyReference.m_Reference = firebaseObj.Reference;
        objSurveyReference.setSaved();
        return objSurveyReference;
    };
    // Generate static insterface to de-serialise from response JSON
    SurveyReference.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objSurveyReferenceJson) { return SurveyReference.fromJsonObject(objSurveyReferenceJson); });
    };
    SurveyReference.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return SurveyReference.fromJsonObject(objJson);
    };
    SurveyReference.fromJsonObject = function (objJson) {
        var objSurveyReference = new SurveyReference();
        objSurveyReference.m_ID = objJson.ID;
        objSurveyReference.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objSurveyReference.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objSurveyReference.m_Name = objJson.Name;
        objSurveyReference.m_Description = objJson.Description;
        objSurveyReference.m_Date = TimeConversion_1.TimeConversion.toDate(objJson.Date);
        objSurveyReference.m_Reference = objJson.Reference;
        return objSurveyReference;
    };
    SurveyReference.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    SurveyReference.prototype.toJsonObject = function () {
        return {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            Date: lodash(this.Date).isNil() ? null : this.m_Date.toISOString(),
            Reference: lodash(this.Reference).isNil() ? null : this.m_Reference
        };
    };
    return SurveyReference;
}());
exports.SurveyReference = SurveyReference;
//# sourceMappingURL=SurveyReference.js.map