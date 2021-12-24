import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericService } from 'src/app/shared/services/generic.service';
// import 'rxjs/add/operator/map';

const action = '/metrics';
@Injectable({
    providedIn: 'root'
})

export class GraphService extends GenericService<Object>{

    constructor(private httpClient:HttpClient) { 
        super(httpClient, `${action}`);
    }


    public getStudiesByMonthOfYear(year:number): Observable<Object> {
        return this.http.get(`${this.baseUrl}/${year}/studies-by-month`);
    }

    public getStudiesByStudyType(): Observable<Object> {
        return this.http.get(`${this.baseUrl}/studies-by-type`);
    }


  

}