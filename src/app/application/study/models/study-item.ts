import { Patient } from "../../patient/models/patient";
import { ReferringDoctor } from "../../referring-doctor/models/referring-doctor";
import { PresumptiveDiagnosis } from "./presumptive-diagnosis";
import { StudyStatus } from "./study-status";
import { StudyType } from "./study-type";

export class StudyItem {
    id?:number;
    createdAt:Date;
    firstName:string;
    lastName:string;
    budget: number;
    extractionAmount: number;
    studyType: StudyType;
    presumptiveDiagnosis: PresumptiveDiagnosis;
    actualStatus: StudyStatus;

    constructor(){
        this.studyType = new StudyType();
        this.presumptiveDiagnosis = new PresumptiveDiagnosis();
        this.actualStatus = new StudyStatus();
        this.budget = 0.0;
        this.extractionAmount = 0.0;
    }
}