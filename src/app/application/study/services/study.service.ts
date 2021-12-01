import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Study } from '../models/study';
import { StudyItem } from '../models/study-item';

const action = '/study';
@Injectable({
  providedIn: 'root'
})
export class StudyService extends GenericService<Study> {

  constructor(private httpClient:HttpClient) { 
    super(httpClient, `${action}`);
  }

  public getAllItem():Observable<StudyItem[]> {
    return this.http.get<StudyItem[]>(`${this.baseUrl}`);
  }
}
