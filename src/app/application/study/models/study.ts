import { Patient } from "../../patient/models/patient";
import { ReferringDoctor } from "../../referring-doctor/models/referring-doctor";
import { Appointment } from "./appointment";
import { Checkpoint } from "./checkpoint";
import { Extractionist } from "./extractionist";
import { PresumptiveDiagnosis } from "./presumptive-diagnosis";
import { StudyStatus } from "./study-status";
import { StudyType } from "./study-type";

export class Study {
    id?:number;
    patient: Patient;
    budget: number;
    extractionAmount: number;
    referringDoctor: ReferringDoctor;
    type: StudyType;
    studyType: StudyType;
    presumptiveDiagnosis: PresumptiveDiagnosis;
    createdAt: Date;
    extractionist: Extractionist;
    checkpoints: Checkpoint[];
    actualStatus: StudyStatus;
    paidExtractionAmount: boolean;
    appointment: Appointment;

    constructor(){
        this.patient = new Patient();
        this.referringDoctor = new ReferringDoctor();
        this.type = new StudyType();
        this.studyType = new StudyType();
        this.presumptiveDiagnosis = new PresumptiveDiagnosis();
        this.extractionist = new Extractionist();
        this.actualStatus = new StudyStatus();
        this.appointment = new Appointment();
        this.checkpoints = [];
        this.budget = 0.0;
        this.extractionAmount = 0.0;
    }
}