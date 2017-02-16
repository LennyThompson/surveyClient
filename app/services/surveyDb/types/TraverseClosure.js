// ****THIS IS A CODE GENERATED FILE DO NOT EDIT****
// Generated on Thu Feb 16 18:39:48 AEST 2017
"use strict";
var TimeConversion_1 = require("./../TimeConversion");
var lodash = require("lodash");
// declare internal types
var TraverseClosure = (function () {
    function TraverseClosure() {
        this.m_ID = 0;
        this.m_Created = new Date();
        this.m_Updated = new Date();
        this.m_MiscZ = 0;
        this.m_MiscY = 0;
        this.m_MiscX = 0;
        this.m_BearingMisclose = 0;
        this.m_TraverseLength = 0;
        this.m_Adjusted = 0;
        this.m_TraverseID = 0;
        this.m_bMiscZUpdated = true;
        this.m_bMiscYUpdated = true;
        this.m_bMiscXUpdated = true;
        this.m_bBearingMiscloseUpdated = true;
        this.m_bTraverseLengthUpdated = true;
        this.m_bAdjustedUpdated = true;
        this.m_bTraverseIDUpdated = true;
    }
    Object.defineProperty(TraverseClosure.prototype, "ID", {
        get: function () {
            return this.m_ID;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraverseClosure.prototype, "Created", {
        get: function () {
            return this.m_Created;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraverseClosure.prototype, "Updated", {
        get: function () {
            return this.m_Updated;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraverseClosure.prototype, "MiscZ", {
        get: function () {
            return this.m_MiscZ;
        },
        set: function (MiscZ) {
            this.m_MiscZ = MiscZ;
            this.m_bMiscZUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraverseClosure.prototype, "MiscY", {
        get: function () {
            return this.m_MiscY;
        },
        set: function (MiscY) {
            this.m_MiscY = MiscY;
            this.m_bMiscYUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraverseClosure.prototype, "MiscX", {
        get: function () {
            return this.m_MiscX;
        },
        set: function (MiscX) {
            this.m_MiscX = MiscX;
            this.m_bMiscXUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraverseClosure.prototype, "BearingMisclose", {
        get: function () {
            return this.m_BearingMisclose;
        },
        set: function (BearingMisclose) {
            this.m_BearingMisclose = BearingMisclose;
            this.m_bBearingMiscloseUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraverseClosure.prototype, "TraverseLength", {
        get: function () {
            return this.m_TraverseLength;
        },
        set: function (TraverseLength) {
            this.m_TraverseLength = TraverseLength;
            this.m_bTraverseLengthUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraverseClosure.prototype, "Adjusted", {
        get: function () {
            return this.m_Adjusted;
        },
        set: function (Adjusted) {
            this.m_Adjusted = Adjusted;
            this.m_bAdjustedUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TraverseClosure.prototype, "TraverseID", {
        get: function () {
            return this.m_TraverseID;
        },
        set: function (TraverseID) {
            this.m_TraverseID = TraverseID;
            this.m_bTraverseIDUpdated = true;
        },
        enumerable: true,
        configurable: true
    });
    TraverseClosure.prototype.getUpdate = function () {
        var objUpdated = {};
        var bUpdated = false;
        if (this.m_bMiscZUpdated) {
            objUpdated["MiscZ"] = lodash(this.MiscZ).isNil() ? null : this.m_MiscZ;
        }
        if (this.m_bMiscYUpdated) {
            objUpdated["MiscY"] = lodash(this.MiscY).isNil() ? null : this.m_MiscY;
        }
        if (this.m_bMiscXUpdated) {
            objUpdated["MiscX"] = lodash(this.MiscX).isNil() ? null : this.m_MiscX;
        }
        if (this.m_bBearingMiscloseUpdated) {
            objUpdated["BearingMisclose"] = lodash(this.BearingMisclose).isNil() ? null : this.m_BearingMisclose;
        }
        if (this.m_bTraverseLengthUpdated) {
            objUpdated["TraverseLength"] = lodash(this.TraverseLength).isNil() ? null : this.m_TraverseLength;
        }
        if (this.m_bAdjustedUpdated) {
            objUpdated["Adjusted"] = lodash(this.Adjusted).isNil() ? null : this.m_Adjusted;
        }
        if (this.m_bTraverseIDUpdated) {
            objUpdated["TraverseID"] = lodash(this.TraverseID).isNil() ? null : this.m_TraverseID;
        }
        return objUpdated;
    };
    TraverseClosure.prototype.setSaved = function () {
        this.m_bMiscZUpdated = false;
        this.m_bMiscYUpdated = false;
        this.m_bMiscXUpdated = false;
        this.m_bBearingMiscloseUpdated = false;
        this.m_bTraverseLengthUpdated = false;
        this.m_bAdjustedUpdated = false;
        this.m_bTraverseIDUpdated = false;
    };
    TraverseClosure.prototype.toFirebase = function () {
        var objFirebase = {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            MiscZ: lodash(this.MiscZ).isNil() ? null : this.m_MiscZ,
            MiscY: lodash(this.MiscY).isNil() ? null : this.m_MiscY,
            MiscX: lodash(this.MiscX).isNil() ? null : this.m_MiscX,
            BearingMisclose: lodash(this.BearingMisclose).isNil() ? null : this.m_BearingMisclose,
            TraverseLength: lodash(this.TraverseLength).isNil() ? null : this.m_TraverseLength,
            Adjusted: lodash(this.Adjusted).isNil() ? null : this.m_Adjusted,
            TraverseID: lodash(this.TraverseID).isNil() ? null : this.m_TraverseID
        };
        return objFirebase;
    };
    TraverseClosure.fromFirebase = function (firebaseObj) {
        var objTraverseClosure = new TraverseClosure();
        objTraverseClosure.m_ID = firebaseObj.ID;
        objTraverseClosure.m_Created = TimeConversion_1.TimeConversion.toDate(firebaseObj.created);
        objTraverseClosure.m_Updated = TimeConversion_1.TimeConversion.toDate(firebaseObj.updated);
        objTraverseClosure.m_MiscZ = firebaseObj.MiscZ;
        objTraverseClosure.m_MiscY = firebaseObj.MiscY;
        objTraverseClosure.m_MiscX = firebaseObj.MiscX;
        objTraverseClosure.m_BearingMisclose = firebaseObj.BearingMisclose;
        objTraverseClosure.m_TraverseLength = firebaseObj.TraverseLength;
        objTraverseClosure.m_Adjusted = firebaseObj.Adjusted;
        objTraverseClosure.m_TraverseID = firebaseObj.TraverseID;
        objTraverseClosure.setSaved();
        return objTraverseClosure;
    };
    // Generate static insterface to de-serialise from response JSON
    TraverseClosure.arrayFromJson = function (objJson) {
        return lodash.map(objJson, function (objTraverseClosureJson) { return TraverseClosure.fromJsonObject(objTraverseClosureJson); });
    };
    TraverseClosure.fromJson = function (strJson) {
        var objJson = JSON.parse(strJson);
        return TraverseClosure.fromJsonObject(objJson);
    };
    TraverseClosure.fromJsonObject = function (objJson) {
        var objTraverseClosure = new TraverseClosure();
        objTraverseClosure.m_ID = objJson.ID;
        objTraverseClosure.m_Created = TimeConversion_1.TimeConversion.toDate(objJson.created);
        objTraverseClosure.m_Updated = TimeConversion_1.TimeConversion.toDate(objJson.updated);
        objTraverseClosure.m_MiscZ = objJson.MiscZ;
        objTraverseClosure.m_MiscY = objJson.MiscY;
        objTraverseClosure.m_MiscX = objJson.MiscX;
        objTraverseClosure.m_BearingMisclose = objJson.BearingMisclose;
        objTraverseClosure.m_TraverseLength = objJson.TraverseLength;
        objTraverseClosure.m_Adjusted = objJson.Adjusted;
        objTraverseClosure.m_TraverseID = objJson.TraverseID;
        return objTraverseClosure;
    };
    TraverseClosure.prototype.toJson = function () {
        return JSON.stringify(this.toJsonObject());
    };
    TraverseClosure.prototype.toJsonObject = function () {
        return {
            ID: lodash(this.ID).isNil() ? null : this.m_ID,
            created: lodash(this.Created).isNil() ? null : this.m_Created.toISOString(),
            updated: lodash(this.Updated).isNil() ? null : this.m_Updated.toISOString(),
            MiscZ: lodash(this.MiscZ).isNil() ? null : this.m_MiscZ,
            MiscY: lodash(this.MiscY).isNil() ? null : this.m_MiscY,
            MiscX: lodash(this.MiscX).isNil() ? null : this.m_MiscX,
            BearingMisclose: lodash(this.BearingMisclose).isNil() ? null : this.m_BearingMisclose,
            TraverseLength: lodash(this.TraverseLength).isNil() ? null : this.m_TraverseLength,
            Adjusted: lodash(this.Adjusted).isNil() ? null : this.m_Adjusted,
            TraverseID: lodash(this.TraverseID).isNil() ? null : this.m_TraverseID
        };
    };
    return TraverseClosure;
}());
exports.TraverseClosure = TraverseClosure;
//# sourceMappingURL=TraverseClosure.js.map