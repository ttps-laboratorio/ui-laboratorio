import { Patient } from "../../patient/models/patient";
import { ReferringDoctor } from "../../referring-doctor/models/referring-doctor";
import { PresumptiveDiagnosis } from "./presumptive-diagnosis";
import { StudyType } from "./study-type";

export class StudyItem {
    id?:number;
    createdAt:Date;
    firstName:string;
    lastName:string;
    budget: number;
    extractionAmount: number;
    referringDoctor: ReferringDoctor;
    studyType: StudyType;
    presumptiveDiagnosis: PresumptiveDiagnosis;

    constructor(){
        this.referringDoctor = new ReferringDoctor();
        this.studyType = new StudyType();
        this.presumptiveDiagnosis = new PresumptiveDiagnosis();
        this.budget = 0.0;
        this.extractionAmount = 0.0;
    }
}