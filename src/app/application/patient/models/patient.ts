import { HealthInsurance } from "../../health-insurance/models/health-insurance";
import { Contact } from "./contact";

export class Patient {
    id?: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    dni: number;
    contact?:Contact;
    healthInsurance?:HealthInsurance;
    afiliateNumber:number;
    clinicHistory:string;

    constructor() {
        this.healthInsurance = new HealthInsurance();
        this.contact = new Contact();
    }
}
