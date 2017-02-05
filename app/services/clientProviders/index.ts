import { EditPointProvider } from "./point/EditPointProvider"
import {SurveyContextProvider} from "./survey/surveyContextProvider";

export const CLIENT_PROVIDERS: any[] = [
    EditPointProvider,
    SurveyContextProvider
];

export { EditPointProvider } from "./point/EditPointProvider"
export { SurveyContextProvider } from "./survey/surveyContextProvider";
