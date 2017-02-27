"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
require("rxjs/add/observable/of");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/toPromise");
var SurveyServiceHttp_1 = require("./SurveyServiceHttp");
var chai_1 = require("chai");
var SURVEY_RESPONSE = require("../../../../etc/assets/survey.json");
describe("Testing survey http service", function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                SurveyServiceHttp_1.SurveyServiceHttp,
                {
                    provide: http_1.Http,
                    useFactory: function (mockBackend, options) {
                        return new http_1.Http(mockBackend, options);
                    },
                    deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                },
                testing_2.MockBackend,
                http_1.BaseRequestOptions
            ]
        })
            .compileComponents();
    }));
    it("can instantiate service when injected as service and recieve mocked data", testing_1.inject([SurveyServiceHttp_1.SurveyServiceHttp, testing_2.MockBackend], function (service, mockBackend) {
        chai_1.expect(service instanceof SurveyServiceHttp_1.SurveyServiceHttp).to.be.true;
        mockBackend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(SURVEY_RESPONSE) })));
        });
        return chai_1.expect(service.loadAllFromDatabase().first().toPromise()).to.eventually.exist;
    }));
    it("can load valid survey from http source", testing_1.inject([SurveyServiceHttp_1.SurveyServiceHttp, testing_2.MockBackend], function (service, mockBackend) {
        chai_1.expect(service instanceof SurveyServiceHttp_1.SurveyServiceHttp).to.be.true;
        mockBackend.connections.subscribe(function (connection) {
            connection.mockRespond(new http_1.Response(new http_1.ResponseOptions({ body: JSON.stringify(SURVEY_RESPONSE) })));
        });
        var listSurveys = service.loadAllFromDatabase().first().toPromise();
        var survey = listSurveys
            .then(function (surveys) {
            chai_1.expect(surveys.length).to.equal(1);
            return surveys[0];
        })
            .then(function (survey) {
            chai_1.expect(survey.Name).to.equal("Test Survey");
            chai_1.expect(survey.Description).to.equal("Testing...");
            chai_1.expect(survey.Projection).to.exist;
            chai_1.expect(survey.Projection.Name).to.equal("UTM XX");
            chai_1.expect(survey.Projection.Description).to.equal("Transverse Mercator Projection - TODO");
            chai_1.expect(survey.Updated.getFullYear()).to.equal(2016);
            chai_1.expect(survey.Updated.getHours()).to.equal(6 - (survey.Updated.getTimezoneOffset() / 60));
            chai_1.expect(survey.Traverse).to.exist;
            chai_1.expect(survey.Traverse.length).to.equal(1);
            chai_1.expect(survey.Traverse[0].Name).to.equal("New Traverse");
            chai_1.expect(survey.Traverse[0].StartPoint.Name).to.equal("First Point");
            chai_1.expect(survey.Traverse[0].StartPoint.X).to.equal(1000.0);
            chai_1.expect(survey.Traverse[0].StartPoint.Y).to.equal(2000.0);
            chai_1.expect(survey.Traverse[0].StartPoint.Z).to.equal(500.0);
            chai_1.expect(survey.Traverse[0].StartPoint.PointType.Name).to.equal("Trig Point");
            chai_1.expect(survey.Traverse[0].SurveyMeasurement.length).to.equal(3);
            chai_1.expect(survey.Traverse[0].SurveyMeasurement[0].HorizDistance).to.be.closeTo(100.0, 0.01);
            chai_1.expect(survey.Traverse[0].SurveyMeasurement[0].Bearing).to.be.closeTo(0.0, 0.01);
            chai_1.expect(survey.Traverse[0].SurveyMeasurement[0].VertDistance).to.be.closeTo(10.0, 0.01);
            chai_1.expect(survey.Traverse[0].SurveyMeasurement[0].PointTo.X).to.be.closeTo(1000.0, 0.01);
            return survey;
        });
        return chai_1.expect(survey).to.eventually.exist;
    }));
});
//# sourceMappingURL=SurveyServiceHttp.spec.js.map