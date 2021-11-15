import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { ReferringDoctor } from '../models/referring-doctor';

const action = '/doctor';
@Injectable({
  providedIn: 'root'
})
export class ReferringDoctorService extends GenericService<ReferringDoctor> {

  constructor(private httpClient:HttpClient) { 
    super(httpClient, `${action}`);
  }
}
