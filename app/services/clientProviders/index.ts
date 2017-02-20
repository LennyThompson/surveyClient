import { EditPointProvider } from "./point/EditPointProvider"
import { FromPointProvider } from "./point/FromPointProvider"
import {SurveyContextProvider} from "./survey/surveyContextProvider";

export const CLIENT_PROVIDERS: any[] = [
    EditPointProvider,
    FromPointProvider,
    SurveyContextProvider
];

export { EditPointProvider } from "./point/EditPointProvider"
export { FromPointProvider } from "./point/FromPointProvider"
export { SurveyContextProvider } from "./survey/surveyContextProvider";
