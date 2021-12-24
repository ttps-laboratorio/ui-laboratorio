import { SampleBatch } from "../../sample-batch/models/sample-batch";

export class Sample {
    id?:number;
    milliliters: number;
    freezer: number;
    sampleBatch?:SampleBatch;
}