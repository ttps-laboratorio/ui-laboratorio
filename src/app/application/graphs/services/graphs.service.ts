import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudiesPerMonth } from '../models/studies-per-month'
import { GenericService } from 'src/app/shared/services/generic.service';


const action = '/metrics';
@Injectable({
    providedIn: 'root'
})

export class GraphService extends GenericService<StudiesPerMonth>{

    constructor(private httpClient:HttpClient) { 
        super(httpClient, `${action}`);
    }


    public getStudiesByMonthOfYear(year:number): Observable<StudiesPerMonth> {
        return this.http.get<StudiesPerMonth>(`${this.baseUrl}/${year}/studies-by-month`);
    }

    // public getStudiesByStudyType(): Observable<Object> {
    //     return this.http.get(`${this.baseUrl}/studies-by-type`);
    // }


  

}