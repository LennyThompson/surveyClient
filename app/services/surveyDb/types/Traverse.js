"use strict";
var SurveyPoint_1 = require("./SurveyPoint");
var TraverseClosure_1 = require("./TraverseClosure");
var SurveyMeasurement_1 = require("./SurveyMeasurement");
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
var Traverse = (function () {
    function Traverse() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_Name = "";
        this.m_Description = "";
        this.m_StartPoint = new SurveyPoint_1.SurveyPoint();
        this.m_EndPoint = new SurveyPoint_1.SurveyPoint();
        this.m_SurveyID = 0;
        this.m_TraverseClosure = [];
        this.m_SurveyMeasurement = [];
        this.m_bNameUpdated = true;
        this.m_bDescriptionUpdated = true;
        this.m_bStartPointUpdated = true;
        this.m_bEndPointUpdated = true;
        this.m_bSurveyIDUpdated = true;
        this.m_bTraverseClosureUpdated = true;
        this.m_bSurveyMeasurementUpdated = true;
    }
    Object.defineProperty(Traverse.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Traverse.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Traverse.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Traverse.prototype, "Name", {
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
    Object.defineProperty(Traverse.prototype, "Description", {
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
    Object.defineProperty(Traverse.prototype, "StartPoint", {
        get: function () {
            return this.m_StartPoint;
        },
        set: function (StartPoint) {
            this.m_StartPoint = StartPoint;
            this.m_bStartPointUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Traverse.prototype, "EndPoint", {
        get: function () {
            return this.m_EndPoint;
        },
        set: function (EndPoint) {
            this.m_EndPoint = EndPoint;
            this.m_bEndPointUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Traverse.prototype, "SurveyID", {
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
    Object.defineProperty(Traverse.prototype, "TraverseClosure", {
        get: function () {
            return this.m_TraverseClosure;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Traverse.prototype, "SurveyMeasurement", {
        get: function () {
            return this.m_SurveyMeasurement;
        },
        enumerable: true,
        configurable: true
    });
    Traverse.prototype.addTraverseClosure = function (addTraverseClosure) {
        this.m_TraverseClosure.push(addTraverseClosure);
        this.m_bTraverseClosureUpdated = true;
    };
    Traverse.prototype.addSurveyMeasurement = function (addSurveyMeasurement) {
        this.m_SurveyMeasurement.push(addSurveyMeasurement);
        this.m_bSurveyMeasurementUpdated = true;
    };
    Traverse.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bNameUpdated) {
            objUpdated["Name"] = this.m_Name;
        }
        if (this.m_bDescriptionUpdated) {
            objUpdated["Description"] = this.m_Description;
        }
        if (this.m_bStartPointUpdated) {
            objUpdated["StartPointID"] = this.m_StartPoint.toJsonObject();
        }
        if (this.m_bEndPointUpdated) {
            objUpdated["EndPointID"] = this.m_EndPoint.toJsonObject();
        }
        if (this.m_bSurveyIDUpdated) {
            objUpdated["SurveyID"] = this.m_SurveyID;
        }
        if (this.m_bTraverseClosureUpdated) {
            objUpdated["TraverseClosure"] = lodash.map(this.m_TraverseClosure, function (arrayMember) {
                return arrayMember.toJsonObject();
            });
        }
        if (this.m_bSurveyMeasurementUpdated) {
            objUpdated["SurveyMeasurement"] = lodash.map(this.m_SurveyMeasurement, function (arrayMember) {
                return arrayMember.toJsonObject();
            });
        }
        return objUpdated;
    };
    Traverse.prototype.toFirebase = function () {
        var objFirebase = {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Name: this.m_Name,
            Description: this.m_Description,
            StartPointID: this.m_StartPoint.toFirebase(),
            EndPointID: this.m_EndPoint.toFirebase(),
            SurveyID: this.m_SurveyID,
            TraverseClosure: lodash.map(this.m_TraverseClosure, function (arrayMember) {
                return arrayMember.toFirebase();
            }),
            SurveyMeasurement: lodash.map(this.m_SurveyMeasurement, function (arrayMember) {
                return arrayMember.toFirebase();
            })
        };
        return objFirebase;
    };
    Traverse.prototype.setSaved = function () {
        this.m_bNameUpdated = false;
        this.m_bDescriptionUpdated = false;
        this.m_bStartPointUpdated = false;
        this.m_bEndPointUpdated = false;
        this.m_bSurveyIDUpdated = false;
        this.m_bTraverseClosureUpdated = false;
        this.m_bSurveyMeasurementUpdated = false;
    };
    Traverse.fromFirebase = function (firebaseObj) {
        var objTraverse = new Traverse();
        objTraverse.m_ID = firebaseObj.ID;
        objTraverse.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objTraverse.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objTraverse.m_Name = firebaseObj.Name;
        objTraverse.m_Description = firebaseObj.Description;
        objTraverse.m_StartPoint = SurveyPoint_1.SurveyPoint.fromFirebase(firebaseObj.StartPointID);
        objTraverse.m_EndPoint = SurveyPoint_1.SurveyPoint.fromFirebase(firebaseObj.EndPointID);
        objTraverse.m_SurveyID = firebaseObj.SurveyID;
        objTraverse.m_TraverseClosure = lodash.map(firebaseObj.TraverseClosure, function (arrayMember) {
            return TraverseClosure_1.TraverseClosure.fromFirebase(arrayMember);
        });
        objTraverse.m_SurveyMeasurement = lodash.map(firebaseObj.SurveyMeasurement, function (arrayMember) {
            return SurveyMeasurement_1.SurveyMeasurement.fromFirebase(arrayMember);
        });
        objTraverse.setSaved();
        return objTraverse;
    };
    // Generate static insterface to de-serialise from response JSON
    Traverse.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objTraverseJson) { return Traverse.fromJsonObject(objTraverseJson); });
    };
    Traverse.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return Traverse.fromJsonObject(objJson);
    };
    Traverse.fromJsonObject = function (objJson) {
        var objTraverse = new Traverse();
        objTraverse.m_ID = objJson.ID;
        objTraverse.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objTraverse.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objTraverse.m_Name = objJson.Name;
        objTraverse.m_Description = objJson.Description;
        objTraverse.m_StartPoint = SurveyPoint_1.SurveyPoint.fromJsonObject(objJson.StartPointID);
        objTraverse.m_EndPoint = SurveyPoint_1.SurveyPoint.fromJsonObject(objJson.EndPointID);
        objTraverse.m_SurveyID = objJson.SurveyID;
        objTraverse.m_TraverseClosure = lodash.map(objJson.TraverseClosure, function (arrayMember) {
            return TraverseClosure_1.TraverseClosure.fromJsonObject(arrayMember);
        });
        objTraverse.m_SurveyMeasurement = lodash.map(objJson.SurveyMeasurement, function (arrayMember) {
            return SurveyMeasurement_1.SurveyMeasurement.fromJsonObject(arrayMember);
        });
        return objTraverse;
    };
    Traverse.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    Traverse.prototype.toJsonObject = function () {
        return {
            ID: this.m_ID,
            created: this.m_Created.toISOString(),
            updated: this.m_Updated.toISOString(),
            Name: this.m_Name,
            Description: this.m_Description,
            StartPointID: this.m_StartPoint.toJsonObject(),
            EndPointID: this.m_EndPoint.toJsonObject(),
            SurveyID: this.m_SurveyID,
            TraverseClosure: lodash.map(this.m_TraverseClosure, function (arrayMember) {
                return arrayMember.toJsonObject();
            }),
            SurveyMeasurement: lodash.map(this.m_SurveyMeasurement, function (arrayMember) {
                return arrayMember.toJsonObject();
            })
        };
    };
    return Traverse;
}());
exports.Traverse = Traverse;
//# sourceMappingURL=Traverse.js.map