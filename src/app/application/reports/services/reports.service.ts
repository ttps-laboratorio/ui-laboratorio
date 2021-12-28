import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudiesPerMonth } from '../models/studies-per-month'
import { StudiesPerType } from '../models/studies-per-type';
import { StudiesPerStatus } from '../models/studies-per-status';
import { GenericService } from 'src/app/shared/services/generic.service';


const action = '/metrics';
@Injectable({
    providedIn: 'root'
})

export class ReportsService extends GenericService<StudiesPerMonth>{

    constructor(private httpClient:HttpClient) { 
        super(httpClient, `${action}`);
    }

    public getStudiesByMonthOfYear(year:number): Observable<StudiesPerMonth> {
        return this.http.get<StudiesPerMonth>(`${this.baseUrl}/${year}/studies-by-month`);
    }

    public getStudiesByStudyType(): Observable<StudiesPerType[]> {
        return this.http.get<StudiesPerType[]>(`${this.baseUrl}/studies-by-type`);
    }

    public getStudiesByStudyStatus(): Observable<StudiesPerStatus[]> {
        return this.http.get<StudiesPerStatus[]>(`${this.baseUrl}/studies-by-status`);
    }
    
    public getValidYears(): Observable<number[]> {
        return this.http.get<number[]>(`${this.baseUrl}/years-with-studies`);
    }

}