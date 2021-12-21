import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { SampleBatch } from '../models/sample-batch';

const action = '/sample-batch';
@Injectable({
  providedIn: 'root'
})
export class SampleBatchService extends GenericService<SampleBatch> {

  constructor(private httpClient:HttpClient) { 
    super(httpClient, `${action}`);
  }
}
