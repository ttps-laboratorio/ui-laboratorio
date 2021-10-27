import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { HealthInsurance } from '../models/health-insurance';

const action = '/health-insurance';
@Injectable({
  providedIn: 'root'
})
export class HealthInsuranceService extends GenericService<HealthInsurance> {

  constructor(private httpClient:HttpClient) { 
    super(httpClient, `${action}`);
  }
}
