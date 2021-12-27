import { User } from "../../employee/models/user";
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
    user:User;

    constructor() {
        this.healthInsurance = new HealthInsurance();
        this.guardian = new Guardian();
        this.user = new User();
    }

}
