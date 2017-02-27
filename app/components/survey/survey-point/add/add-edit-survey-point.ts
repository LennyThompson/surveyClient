
import {SurveyPoint} from "../../../../services/surveyDb/types";
import {CurrentSurveyPointProvider} from "../../simple-providers";

export class AddEditSurveyPoint
{
    constructor(private pointProvider: CurrentSurveyPointProvider)
    {
    }

    set Point(value: SurveyPoint)
    {
        this.pointProvider.SurveyPoint = value;
    }

    get Point(): SurveyPoint
    {
        return this.pointProvider.SurveyPoint;
    }

}