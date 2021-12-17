import { StudyStatus } from "./study-status";
import { StudyType } from "./study-type";

export class SearchStudyFilter {
    dni: number;
    studyStatus: StudyStatus;
    studyType: StudyType;

    constructor() {
        this.dni = null;
        this.studyStatus = new StudyStatus();
        this.studyStatus.id = null;
        this.studyType = new StudyType();
        this.studyType.id=null;
    }
}