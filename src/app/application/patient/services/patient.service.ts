import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Study } from '../../study/models/study';
import { Patient } from '../models/patient';

const action = '/patient';
@Injectable({
  providedIn: 'root'
})
export class PatientService extends GenericService<Patient> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, `${action}`);
  }

  public createStudy(patientId:number, study: Study): Observable<Study> {
    return this.http.post<Study>(`${this.baseUrl}/${patientId}/study`, study);
  }

}
