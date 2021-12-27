import { HealthInsurance } from "../../health-insurance/models/health-insurance";
import { Guardian } from "./guardian";

export class Patient {
    id?: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    dni: number;
    healthInsurance?: HealthInsurance;
    affiliateNumber: string;
    clinicHistory: string;
    address: string;
    email: string;
    phoneNumber: string;
    guardian:Guardian;

    constructor() {
        this.healthInsurance = new HealthInsurance();
        this.guardian = new Guardian();
    }

}
