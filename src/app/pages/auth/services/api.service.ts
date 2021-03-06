import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { environment } from 'src/environments/environment';
import { PatientRegister } from '../models/patient-register';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.baseUrl + '/auth/';
  private response: Boolean = true;

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<any> {
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    let url = this.baseUrl + 'login';
    return this.http.post(url, credentials, {headers:headers})
  }

  registerPatient(patientRegister: PatientRegister): Observable<any> {
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    let url = environment.baseUrl + '/patient/sign-up';
    return this.http.post(url, patientRegister, {headers:headers})
  }

  userInfo(): Observable<any> {
    let headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    let url = environment.baseUrl + '/user';
    return this.http.get(url, {headers:headers});
  }

}
