import { Component, OnInit } from '@angular/core';
import { StudyService } from '../../study/services/study.service';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-per-month',
  templateUrl: './per-month.component.html',
  styleUrls: ['./per-month.component.css']
})
export class PerMonthComponent implements OnInit {

  chart = []; // This will hold our chart info

  constructor(private studyService: StudyService) { }

  ngOnInit(): void {
    this.studyService.getAll().subscribe(res => {
      console.log(res)});
  }

}
