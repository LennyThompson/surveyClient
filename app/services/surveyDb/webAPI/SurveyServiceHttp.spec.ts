import {
    async, inject, TestBed
} from "@angular/core/testing";

import {
    MockBackend,
    MockConnection
} from "@angular/http/testing";

import {
    HttpModule, Http, Response, ResponseOptions, BaseRequestOptions
} from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/toPromise";

import { Survey } from "../types/Survey";
import { SurveyServiceHttp } from "./SurveyServiceHttp";
import {expect } from "chai";

const SURVEY_RESPONSE = require("../../../../etc/assets/survey.json");

describe("Testing survey http service", () =>
{
    beforeEach( async(() =>
    {
        TestBed.configureTestingModule(
            {
                imports: [ HttpModule ],
                providers: [
                    SurveyServiceHttp,
                    {
                        provide: Http,
                        useFactory: (mockBackend, options) => {
                            return new Http(mockBackend, options);
                        },
                        deps: [MockBackend, BaseRequestOptions]
                    },
                    MockBackend,
                    BaseRequestOptions
                ]
            })
            .compileComponents();
    }));

    it("can instantiate service when injected as service and recieve mocked data",
        inject(
            [SurveyServiceHttp, MockBackend],
            (service : SurveyServiceHttp, mockBackend: MockBackend) =>
            {
                expect(service instanceof SurveyServiceHttp).to.be.true;
                mockBackend.connections.subscribe(
                    (connection) =>
                    {
                        connection.mockRespond(
                            new Response(new ResponseOptions({body: JSON.stringify(SURVEY_RESPONSE)}))
                        );
                    }
                );


                expect(service.loadAllFromDatabase().first().toPromise()).to.eventually.exist;
            }
        )
    );

    it("can load valid survey from http source",
        inject(
            [SurveyServiceHttp, MockBackend],
            (service : SurveyServiceHttp, mockBackend: MockBackend) =>
            {
                expect(service instanceof SurveyServiceHttp).to.be.true;
                mockBackend.connections.subscribe(
                    (connection) =>
                    {
                        connection.mockRespond(
                            new Response(new ResponseOptions({body: JSON.stringify(SURVEY_RESPONSE)}))
                        );
                    }
                );


                let listSurveys: Promise<Survey[]> = service.loadAllFromDatabase().first().toPromise();

                let survey: Promise<Survey> = listSurveys
                    .then(
                        (surveys: Survey[])=>
                        {
                            expect(surveys.length).to.equal(1);
                            return surveys[0];
                        }
                    )
                    .then(
                        (survey: Survey) =>
                        {
                            expect(survey.Name).to.equal("Test Survey");
                            expect(survey.Description).to.equal("Testing...");
                            expect(survey.Projection).to.exist;
                            expect(survey.Projection.Name).to.equal("UTM XX");
                            expect(survey.Projection.Description).to.equal("Transverse Mercator Projection - TODO");
                            expect(survey.Traverse).to.exist;
                            expect(survey.Traverse.length).to.equal(1);
                            expect(survey.Traverse[0].Name).to.equal("New Traverse");
                            expect(survey.Traverse[0].StartPoint.Name).to.equal("First Point");
                            expect(survey.Traverse[0].StartPoint.X).to.equal(1000.0);
                            expect(survey.Traverse[0].StartPoint.Y).to.equal(2000.0);
                            expect(survey.Traverse[0].StartPoint.Z).to.equal(500.0);
                            expect(survey.Traverse[0].StartPoint.PointType.Name).to.equal("Trig Point");
                            expect(survey.Traverse[0].SurveyMeasurement.length).to.equal(3);
                            expect(survey.Traverse[0].SurveyMeasurement[0].HorizDistance).to.be.closeTo(100.0, 0.01);
                            expect(survey.Traverse[0].SurveyMeasurement[0].Bearing).to.be.closeTo(0.0, 0.01);
                            expect(survey.Traverse[0].SurveyMeasurement[0].VertDistance).to.be.closeTo(10.0, 0.01);
                            expect(survey.Traverse[0].SurveyMeasurement[0].PointTo.X).to.be.closeTo(1000.0, 0.01);
                            return survey;
                        }
                    );

                expect(survey).to.eventually.exist;
            }
        )
    );

});

