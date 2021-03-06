import { User } from "./user";

export class Employee {
  id?: number;
  firstName: string;
  lastName: string;
  user?: User;

  constructor() {
    this.user = new User();
  }
}
