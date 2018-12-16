import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Patient } from '../data.service';
import { PatientName } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  patients: Patient[];

  constructor(private data: DataService) { }




  ngOnInit() {
    this.data.getPatients()
      .subscribe(data => this.patients = data);
  }



  getPatients() {
    this.data.getPatients()
      .subscribe(data => this.patients = data);
      console.log(this.patients)
  }
}
