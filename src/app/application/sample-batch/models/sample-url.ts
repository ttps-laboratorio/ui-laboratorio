import { Sample } from "../../study/models/sample";
import { Study } from "../../study/models/study";

export class SampleUrl {
    url:string;
    failedSamples:number[];

    constructor(){
        this.failedSamples = [];
    }
}
