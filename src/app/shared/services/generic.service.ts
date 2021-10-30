import { Inject, Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class GenericService<T> {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(
    protected http: HttpClient,
    @Inject(String) protected baseUrl:string,
  ) {
    this.baseUrl = environment.baseUrl + baseUrl;
  }

  getAll():Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}`);
  }
  
  get(id:number):Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  create(object: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, object);
  }

  update<T extends { id?: number; }>(object: T): Observable<T> {
    return this.http.put<T>(
      `${this.baseUrl}/${object.id}`, object
    );
  }

  delete(id:number): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${id}`);
  }

  protected convertAnyToHttp(params: any[]): HttpParams {
    let httpParams = new HttpParams();
    params.forEach((param) => {
      Object.keys(param).forEach(function (key) {
        if (param[key] !== null)
          httpParams = httpParams.append(key, param[key]);
      });
    });
    return httpParams;
  }
}