import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/shared/services/generic.service';
import { SearchStudyFilter } from '../models/search-study-filter';
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

  public getAllItem(filter:SearchStudyFilter):Observable<StudyItem[]> {
    return this.http.get<StudyItem[]>(`${this.baseUrl}`);
  }

  public getAllItemFilter(filter:any):Observable<StudyItem[]> {
    return this.http.get<StudyItem[]>(`${this.baseUrl}`,{params: this.convertAnyToHttp([filter])});
  }
}
