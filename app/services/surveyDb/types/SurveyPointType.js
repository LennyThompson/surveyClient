// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Sun Jan 22 21:26:43 AEST 2017
"use strict";
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
// declare internal types
var SurveyPointType = (function () {
    function SurveyPointType() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Abbreviation = "";
        this.m_UserDefined = 0;
        this.m_bNameUpdated = true;
        this.m_bAbbreviationUpdated = true;
        this.m_bUserDefinedUpdated = true;
    }
    Object.defineProperty(SurveyPointType.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPointType.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPointType.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPointType.prototype, "Name", {
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
    Object.defineProperty(SurveyPointType.prototype, "Abbreviation", {
        get: function () {
            return this.m_Abbreviation;
        },
        set: function (Abbreviation) {
            this.m_Abbreviation = Abbreviation;
            this.m_bAbbreviationUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPointType.prototype, "UserDefined", {
        get: function () {
            return this.m_UserDefined;
        },
        set: function (UserDefined) {
            this.m_UserDefined = UserDefined;
            this.m_bUserDefinedUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPointType.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bNameUpdated) {
            objUpdated["Name"] = lodash(this.Name).isNil() ? null : this.m_Name;
        }
        if (this.m_bAbbreviationUpdated) {
            objUpdated["Abbreviation"] = lodash(this.Abbreviation).isNil() ? null : this.m_Abbreviation;
        }
        if (this.m_bUserDefinedUpdated) {
            objUpdated["UserDefined"] = lodash(this.UserDefined).isNil() ? null : this.m_UserDefined;
        }
        return objUpdated;
    };
    SurveyPointType.prototype.setSaved = function () {
        this.m_bNameUpdated = false;
        this.m_bAbbreviationUpdated = false;
        this.m_bUserDefinedUpdated = false;
    };
    SurveyPointType.prototype.toFirebase = function () {
        var objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Abbreviation: lodash(this.Abbreviation).isNil() ? null : this.m_Abbreviation,
            UserDefined: lodash(this.UserDefined).isNil() ? null : this.m_UserDefined
        };
        return objFirebase;
    };
    SurveyPointType.fromFirebase = function (firebaseObj) {
        var objSurveyPointType = new SurveyPointType();
        objSurveyPointType.m_ID = firebaseObj.ID;
        objSurveyPointType.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objSurveyPointType.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objSurveyPointType.m_Name = firebaseObj.Name;
        objSurveyPointType.m_Abbreviation = firebaseObj.Abbreviation;
        objSurveyPointType.m_UserDefined = firebaseObj.UserDefined;
        objSurveyPointType.setSaved();
        return objSurveyPointType;
    };
    // Generate static insterface to de-serialise from response JSON
    SurveyPointType.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objSurveyPointTypeJson) { return SurveyPointType.fromJsonObject(objSurveyPointTypeJson); });
    };
    SurveyPointType.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return SurveyPointType.fromJsonObject(objJson);
    };
    SurveyPointType.fromJsonObject = function (objJson) {
        var objSurveyPointType = new SurveyPointType();
        objSurveyPointType.m_ID = objJson.ID;
        objSurveyPointType.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objSurveyPointType.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objSurveyPointType.m_Name = objJson.Name;
        objSurveyPointType.m_Abbreviation = objJson.Abbreviation;
        objSurveyPointType.m_UserDefined = objJson.UserDefined;
        return objSurveyPointType;
    };
    SurveyPointType.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    SurveyPointType.prototype.toJsonObject = function () {
        return {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Abbreviation: lodash(this.Abbreviation).isNil() ? null : this.m_Abbreviation,
            UserDefined: lodash(this.UserDefined).isNil() ? null : this.m_UserDefined
        };
    };
    return SurveyPointType;
}());
exports.SurveyPointType = SurveyPointType;
//# sourceMappingURL=SurveyPointType.js.map