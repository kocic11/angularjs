import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

export interface Patient {
  name: PatientName;
  approved: boolean;
  denied: boolean;
  ssn: string;
  ssnChanged: boolean
  status: string;
  username: string;
  password: string;
  email: string;
}

export interface PatientName {
  firstName: string;
  lastName: string;
}

const params = new HttpParams()
  .set('lastName', 'LastName')
  .set('ssn', "333");

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http
      .get<Patient[]>("http://localhost:8081/api/v1/patients", { params })
  }
}