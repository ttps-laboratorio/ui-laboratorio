import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Extractionist } from '../models/extractionist';

const action = '/extractionist';
@Injectable({
  providedIn: 'root'
})
export class ExtractionistService  extends GenericService<Extractionist> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, `${action}`);
  }

}
