import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import * as _ from 'lodash';
import { map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With',
    'Access-Control-Allow-Methods': 'GET, PUT, POST'
  })
};

export interface Patient {
  name: {
    firstName: string;
    lastName: string;
  };
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
  firstname: string;
  lastname: string;
}

const params = new HttpParams()
  .set('lastname', 'LastName')
  .set('ssn', "333");

@Injectable({
  providedIn: 'root'
})
export class DataService {
  patients$: Observable<Patient[]>;
  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http
      .get<Patient[]>("http://localhost:8081/api/v1/patients", { params })
  }
}