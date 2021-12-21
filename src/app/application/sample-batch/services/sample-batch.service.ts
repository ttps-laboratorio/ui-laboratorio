import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/shared/services/generic.service';
import { SampleBatch } from '../models/sample-batch';
import { SampleUrl } from '../models/sample-url';

const action = '/sample-batch';
@Injectable({
  providedIn: 'root'
})
export class SampleBatchService extends GenericService<SampleBatch> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, `${action}`);
  }

  public addUrl(id: number, sampleUrl: SampleUrl): Observable<any> {
    return this.http.post<SampleUrl>(`${this.baseUrl}/${id}/url`, sampleUrl);
  }
}
