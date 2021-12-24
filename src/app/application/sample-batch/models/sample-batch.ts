import { Sample } from "./sample";

export class SampleBatch {
    id?:number;
    status:string;
    samples:Sample[];
    finalReportsUrl:string;

    constructor(){
        this.samples = [];
    }
}
