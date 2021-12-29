import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/shared/services/generic.service';
import { PaidExtractions } from '../../unpaid-extraction/models/paid-extractions';
import { Appointment } from '../models/appointment';
import { ConfirmPayment } from '../models/confirm-payment';
import { FinalReport } from '../models/final-report';
import { Sample } from '../models/sample';
import { SearchStudyFilter } from '../models/search-study-filter';
import { Study } from '../models/study';
import { StudyItem } from '../models/study-item';

const action = '/study';
@Injectable({
  providedIn: 'root'
})
export class StudyService extends GenericService<Study> {

  constructor(private httpClient: HttpClient) {
    super(httpClient, `${action}`);
  }

  public getAllItem(filter: SearchStudyFilter): Observable<StudyItem[]> {
    return this.http.get<StudyItem[]>(`${this.baseUrl}`);
  }

  public getAllItemFilter(filter: any): Observable<StudyItem[]> {
    return this.http.get<StudyItem[]>(`${this.baseUrl}`, { params: this.convertAnyToHttp([filter]) });
  }

  public getAllUnpaidExtraction(): Observable<StudyItem[]> {
    return this.http.get<StudyItem[]>(`${this.baseUrl}/unpaid-extraction`);
  }

  public paidExtractions(paidExtractions: PaidExtractions): Observable<any> {
    return this.http.post(`${this.baseUrl}/unpaid-extraction`, paidExtractions);
  }

  public downloadBudget(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/budget`, { responseType: 'blob' });
  }

  public uploadPaymentProof(id: number, formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/payment-proof`, formData);
  }

  public downloadPaymentProof(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/payment-proof`, { responseType: 'blob' });
  }

  public confirmPaymentProof(id: number, confirmPayment: ConfirmPayment): Observable<any> {
    return this.http.post<ConfirmPayment>(`${this.baseUrl}/${id}/confirm-payment`, confirmPayment);
  }

  public downloadConsent(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/consent`, { responseType: 'blob' });
  }

  public uploadSignedConsent(id: number, formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/signed-consent`, formData);
  }

  public downloadSignedConsent(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/signed-consent`, { responseType: 'blob' });
  }

  public downloadFinalReport(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/${id}/final-report`, { responseType: 'blob' });
  }

  public createAppointment(id: number, appointment: Appointment): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/appointment`, appointment);
  }

  public addSample(id: number, sample: Sample): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/sample`, sample);
  }

  public addExtractionist(id: number, idExtractionist: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/extractionist/${idExtractionist}`, {});
  }

  public addFinalReport(id: number, finalReport: FinalReport): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/final-report`, finalReport);
  }
}
