import { expect } from "chai";
import {SurveyServiceHttp} from "./SurveyServiceHttp";
import {inject, async, TestBed} from "@angular/core/testing";
import {Survey} from "../types/Survey";
import {HttpModule, Http, ConnectionBackend, Connection, XHRBackend} from "@angular/http";
import {IHttpBackendService} from "@angular/upgrade/src/angular_js";

describe.only("Tests connected to live server",
    () =>
    {
        beforeEach( async(() =>
        {
            TestBed.configureTestingModule(
                {
                    imports: [ HttpModule ],
                    providers: [
                        SurveyServiceHttp,
                        Http,
                        ConnectionBackend
                    ]
                })
                .compileComponents();
        }));

        it("can load valid survey from real http source",
            async(
                inject(
                    [SurveyServiceHttp ],
                    (surveyService: SurveyServiceHttp) =>
                    {
                        let listSurveys: Promise<Survey[]> = surveyService.loadAllFromDatabase().first().toPromise();

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
                                    expect(survey.Updated.getFullYear()).to.equal(2016);
                                    expect(survey.Updated.getHours()).to.equal(6 - (survey.Updated.getTimezoneOffset() / 60));
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

                        return expect(survey).to.eventually.exist;

                    }
                )
            )
        );

    }
);