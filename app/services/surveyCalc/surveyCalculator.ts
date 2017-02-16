
import {SurveyMeasurement} from "../surveyDb/types/SurveyMeasurement";
export interface IRectangular
{
    X: number;
    Y: number;
    Z: number;
}

export interface IPolar
{
    HDistance: number;
    Bearing: number;
    VDistance: number;
}

const INV_180: number = 1 / 180;
const TO_RADIANS: number = Math.PI * INV_180;
const FROM_RADIANS: number = 180.0 / Math.PI;

class PolarImpl implements IPolar
{
    HDistance: number;
    Bearing: number;
    VDistance: number;

    constructor();
    constructor(survMeasFrom: SurveyMeasurement)
    constructor(survMeasFrom?: SurveyMeasurement)
    {
        if(survMeasFrom)
        {
            this.HDistance = survMeasFrom.HorizDistance;
            this.Bearing = PolarImpl.toRadians(survMeasFrom.Bearing);
            this.VDistance = survMeasFrom.VertDistance;
        }
    }

    public static toRadians(degBearing: number): number
    {
        return degBearing * TO_RADIANS;
    }

    public static fromRadians(radians: number): number
    {
        return radians * FROM_RADIANS;
    }

    toRectanglar(): IRectangular
    {
        let rectReturn: IRectangular = new RectangularImpl();
        let radians = PolarImpl.toRadians(this.Bearing);
        rectReturn.X = this.HDistance * Math.sin(radians);
        rectReturn.Y = this.HDistance * Math.cos(radians);
        rectReturn.Z = this.VDistance;

        return rectReturn;
    }
}

class RectangularImpl implements IRectangular
{
    X: number;
    Y: number;
    Z: number;

    toPolar(): IPolar
    {
        let polarReturn = new PolarImpl();
        polarReturn.VDistance = this.Z;
        polarReturn.HDistance = Math.sqrt(this.X * this.X + this.Y * this.Y);
        polarReturn.Bearing = Math.atan2(this.Y, this.X);
        if(polarReturn.Bearing < 0)
        {
            polarReturn.Bearing += 2 * Math.PI;
        }
        polarReturn.Bearing = PolarImpl.fromRadians(polarReturn.Bearing);
        return polarReturn;
    }
}

import {Injectable} from "@angular/core";

@Injectable()
export class SurveyCalculator
{

    static convertMeasurementToPolar(survMeas: SurveyMeasurement): IPolar
    {
        return new PolarImpl(survMeas);
    }
}
