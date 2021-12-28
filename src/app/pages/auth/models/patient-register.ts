import { PatientUser } from "./patient-user";

export class PatientRegister {
  dni: number;
  user: PatientUser;

  constructor() {
    this.user = new PatientUser();
  }
}
