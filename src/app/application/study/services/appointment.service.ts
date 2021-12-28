import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/shared/services/generic.service';
import { Appointment } from '../models/appointment';

const action = '/appointment';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService extends GenericService<Appointment> {
  constructor(private httpClient:HttpClient) { 
    super(httpClient, `${action}`);
  }

  getAvailableDates(date:Date):Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/free-appointments/${date.toISOString().split('T')[0]}`);
  }

  getAvailableTimes(date:Date):Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/available-appointments/${date.toISOString().split('T')[0]}`);
  }

  cancelAppointment(id: number):Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
