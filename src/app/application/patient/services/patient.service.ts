import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Patient } from '../models/patient';

const action = '/patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService extends GenericService<Patient> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, `${action}`);
  }
}
