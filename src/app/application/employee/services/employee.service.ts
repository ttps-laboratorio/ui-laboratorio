import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Employee } from '../models/employee';

const action = '/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends GenericService<Employee> {

  constructor(private httpClient:HttpClient) { 
    super(httpClient, `${action}`);
  }
}
