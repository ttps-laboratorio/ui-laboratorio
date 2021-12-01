import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { StudyType } from '../models/study-type';

const action = '/study-type';
@Injectable({
  providedIn: 'root'
})
export class StudyTypeService extends GenericService<StudyType> {

  constructor(private httpClient:HttpClient) { 
    super(httpClient, `${action}`);
  }
}
