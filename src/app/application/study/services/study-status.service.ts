import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { StudyStatus } from '../models/study-status';

const action = '/study-status';
@Injectable({
  providedIn: 'root'
})
export class StudyStatusService extends GenericService<StudyStatus> {

  constructor(private httpClient:HttpClient) { 
    super(httpClient, `${action}`);
  }
}
