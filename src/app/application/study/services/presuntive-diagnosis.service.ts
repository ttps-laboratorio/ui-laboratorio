import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { PresumptiveDiagnosis } from '../models/presumptive-diagnosis';

const action = '/presumptive-diagnosis';
@Injectable({
  providedIn: 'root'
})
export class PresumptiveDiagnosisService extends GenericService<PresumptiveDiagnosis> {

  constructor(private httpClient:HttpClient) { 
    super(httpClient, `${action}`);
  }
}
