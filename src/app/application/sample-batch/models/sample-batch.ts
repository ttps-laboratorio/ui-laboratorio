import { Sample } from "../../study/models/sample";

export class SampleBatch {
    private id?:number;
    private status:string;
    private samples:Sample[];
    private finalReportsUrl:string;

    constructor(){
        this.samples = [];
    }
}
