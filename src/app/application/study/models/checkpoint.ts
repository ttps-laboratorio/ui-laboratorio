import { User } from "src/app/pages/auth/models";
import { StudyStatus } from "./study-status";

export class Checkpoint {
    id?:number;
    createdAt:Date;
    status:StudyStatus;
    createdBy:User;
}
