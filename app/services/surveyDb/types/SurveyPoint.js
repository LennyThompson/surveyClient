// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Tue Mar 07 20:55:07 AEST 2017
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SurveyPointType_1 = require("./SurveyPointType");
var SurveyReference_1 = require("./SurveyReference");
var SurveyImage_1 = require("./SurveyImage");
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
// declare internal types
var SurveyPoint = (function () {
    function SurveyPoint() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_X = 0;
        this.m_Y = 0;
        this.m_Z = 0;
        this.m_Name = "";
        this.m_Description = "";
        this.m_PointType = new SurveyPointType_1.SurveyPointType();
        this.m_Reference = new SurveyReference_1.SurveyReference();
        this.m_SurveyImage = [];
        this.m_bXUpdated = true;
        this.m_bYUpdated = true;
        this.m_bZUpdated = true;
        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bPointTypeUpdated = true;
        this.m_bReferenceUpdated = true;
        this.m_bSurveyImageUpdated = true;
    }
    Object.defineProperty(SurveyPoint.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPoint.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPoint.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPoint.prototype, "X", {
        get: function () {
            return this.m_X;
        },
        set: function (X) {
            this.m_X = X;
            this.m_bXUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPoint.prototype, "Y", {
        get: function () {
            return this.m_Y;
        },
        set: function (Y) {
            this.m_Y = Y;
            this.m_bYUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPoint.prototype, "Z", {
        get: function () {
            return this.m_Z;
        },
        set: function (Z) {
            this.m_Z = Z;
            this.m_bZUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPoint.prototype, "Name", {
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
    Object.defineProperty(SurveyPoint.prototype, "Description", {
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
    Object.defineProperty(SurveyPoint.prototype, "PointType", {
        get: function () {
            return this.m_PointType;
        },
        set: function (PointType) {
            this.m_PointType = PointType;
            this.m_bPointTypeUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPoint.prototype, "Reference", {
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
    Object.defineProperty(SurveyPoint.prototype, "SurveyImage", {
        get: function () {
            return this.m_SurveyImage;
        },
        enumerable: true,
        configurable: true
    });
    SurveyPoint.prototype.addSurveyImage = function (addSurveyImage) {
        this.m_SurveyImage.push(addSurveyImage);
        this.m_bSurveyImageUpdated = true;
    };
    SurveyPoint.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bXUpdated) {
            objUpdated["X"] = lodash(this.X).isNil() ? null : this.m_X;
        }
        if (this.m_bYUpdated) {
            objUpdated["Y"] = lodash(this.Y).isNil() ? null : this.m_Y;
        }
        if (this.m_bZUpdated) {
            objUpdated["Z"] = lodash(this.Z).isNil() ? null : this.m_Z;
        }
        if (this.m_bNameUpdated) {
            objUpdated["Name"] = lodash(this.Name).isNil() ? null : this.m_Name;
        }
        if (this.m_bDescriptionUpdated) {
            objUpdated["Description"] = lodash(this.Description).isNil() ? null : this.m_Description;
        }
        if (this.m_bPointTypeUpdated) {
            objUpdated["PointTypeID"] = lodash(this.PointType).isNil() ? null : this.m_PointType.toJsonObject();
        }
        if (this.m_bReferenceUpdated) {
            objUpdated["RefID"] = lodash(this.Reference).isNil() ? null : this.m_Reference.toJsonObject();
        }
        if (this.m_bSurveyImageUpdated) {
            objUpdated["Images"] = lodash(this.SurveyImage).isNil() ? null : lodash(this.m_SurveyImage).map(function (arrayMember) {
                return arrayMember.toJsonObject();
            });
        }
        return objUpdated;
    };
    SurveyPoint.prototype.setSaved = function () {
        this.m_bXUpdated = false;
        this.m_bYUpdated = false;
        this.m_bZUpdated = false;
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bPointTypeUpdated = false;
        this.m_bReferenceUpdated = false;
        this.m_bSurveyImageUpdated = false;
    };
    SurveyPoint.prototype.toFirebase = function () {
        var objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            X: lodash(this.X).isNil() ? null : this.m_X,
            Y: lodash(this.Y).isNil() ? null : this.m_Y,
            Z: lodash(this.Z).isNil() ? null : this.m_Z,
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            PointTypeID: lodash(this.PointType).isNil() ? null : this.m_PointType.toFirebase(),
            RefID: lodash(this.Reference).isNil() ? null : this.m_Reference.toFirebase(),
            Images: lodash(this.SurveyImage).isNil() ? null : lodash(this.m_SurveyImage).map(function (arrayMember) {
                return arrayMember.toFirebase();
            })
        };
        return objFirebase;
    };
    SurveyPoint.fromFirebase = function (firebaseObj) {
        var objSurveyPoint = new SurveyPoint();
        objSurveyPoint.m_ID = firebaseObj.ID;
        objSurveyPoint.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objSurveyPoint.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objSurveyPoint.m_X = firebaseObj.X;
        objSurveyPoint.m_Y = firebaseObj.Y;
        objSurveyPoint.m_Z = firebaseObj.Z;
        objSurveyPoint.m_Name = firebaseObj.Name;
        objSurveyPoint.m_Description = firebaseObj.Description;
        objSurveyPoint.m_PointType = SurveyPointType_1.SurveyPointType.fromFirebase(firebaseObj.PointTypeID);
        objSurveyPoint.m_Reference = SurveyReference_1.SurveyReference.fromFirebase(firebaseObj.RefID);
        objSurveyPoint.m_SurveyImage = lodash.map(firebaseObj.Images, function (arrayMember) {
            return SurveyImage_1.SurveyImage.fromFirebase(arrayMember);
        });
        objSurveyPoint.setSaved();
        return objSurveyPoint;
    };
    // Generate static insterface to de-serialise from response JSON
    SurveyPoint.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objSurveyPointJson) { return SurveyPoint.fromJsonObject(objSurveyPointJson); });
    };
    SurveyPoint.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return SurveyPoint.fromJsonObject(objJson);
    };
    SurveyPoint.fromJsonObject = function (objJson) {
        var objSurveyPoint = new SurveyPoint();
        objSurveyPoint.m_ID = objJson.ID;
        objSurveyPoint.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objSurveyPoint.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objSurveyPoint.m_X = objJson.X;
        objSurveyPoint.m_Y = objJson.Y;
        objSurveyPoint.m_Z = objJson.Z;
        objSurveyPoint.m_Name = objJson.Name;
        objSurveyPoint.m_Description = objJson.Description;
        objSurveyPoint.m_PointType = SurveyPointType_1.SurveyPointType.fromJsonObject(objJson.PointTypeID);
        objSurveyPoint.m_Reference = SurveyReference_1.SurveyReference.fromJsonObject(objJson.RefID);
        objSurveyPoint.m_SurveyImage = lodash.map(objJson.Images, function (arrayMember) {
            return SurveyImage_1.SurveyImage.fromJsonObject(arrayMember);
        });
        return objSurveyPoint;
    };
    SurveyPoint.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    SurveyPoint.prototype.toJsonObject = function () {
        return {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            X: lodash(this.X).isNil() ? null : this.m_X,
            Y: lodash(this.Y).isNil() ? null : this.m_Y,
            Z: lodash(this.Z).isNil() ? null : this.m_Z,
            Name: lodash(this.Name).isNil() ? null : this.m_Name,
            Description: lodash(this.Description).isNil() ? null : this.m_Description,
            PointTypeID: lodash(this.PointType).isNil() ? null : this.m_PointType.toJsonObject(),
            RefID: lodash(this.Reference).isNil() ? null : this.m_Reference.toJsonObject(),
            Images: lodash(this.SurveyImage).isNil() ? null : lodash(this.m_SurveyImage).map(function (arrayMember) {
                return arrayMember.toJsonObject();
            })
        };
    };
    return SurveyPoint;
}());
exports.SurveyPoint = SurveyPoint;
//# sourceMappingURL=SurveyPoint.js.map