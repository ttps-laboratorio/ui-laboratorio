import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Study } from '../models/study';

const action = '/study';
@Injectable({
  providedIn: 'root'
})
export class StudyService extends GenericService<Study> {

  constructor(private httpClient:HttpClient) { 
    super(httpClient, `${action}`);
  }
}
