import { Sample } from "../../study/models/sample";
import { Study } from "../../study/models/study";

export class SampleBatch {
    id?:number;
    status:string;
    samples:Sample[];
    finalReportsUrl:string;
    studies:Study[];

    constructor(){
        this.samples = [];
        this.studies = [];
    }
}
