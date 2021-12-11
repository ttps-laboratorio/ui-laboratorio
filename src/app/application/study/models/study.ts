import { Patient } from "../../patient/models/patient";
import { ReferringDoctor } from "../../referring-doctor/models/referring-doctor";
import { Appointment } from "./appointment";
import { Extractionist } from "./extractionist";
import { PresumptiveDiagnosis } from "./presumptive-diagnosis"
import { StudyType } from "./study-types";

export class Study {
    id?: number;
    budget: number;
    createdAt: Date;
    extractionAmount: number;
    delay: boolean;
    paidExtractionAmount: boolean;
    appointment?:Appointment;
    extractionist?:Extractionist;
    patient?:Patient;
    presumptiveDiagnosis?: PresumptiveDiagnosis;
    referringDoctor?: ReferringDoctor;
    type?: StudyType;
}
