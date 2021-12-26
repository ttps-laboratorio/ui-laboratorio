import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';
import { ReportsService } from '../services/reports.service';
import { ByMonth } from '../models/by-month';

@Component({
  selector: 'app-per-month',
  templateUrl: './per-month.component.html',
  styleUrls: ['./per-month.component.css']
})
export class PerMonthComponent implements OnInit {

  series: ApexAxisChartSeries;
  chart: ApexChart;
  title:ApexTitleSubtitle;
  xaxis: ApexXAxis;

  labels: Array<string> = [];
  data: Array<number> = [];

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.reportsService.getStudiesByMonthOfYear(2021).subscribe((data) => {

      for (let i = 0; i < data.studiesByMonth.length; i++) {
        this.labels.push(data.studiesByMonth[i].month);
        this.data.push(data.studiesByMonth[i].studies)
      }
    });
      
    
    this.initializeChartOptions();
  }

  private initializeChartOptions(): void {
    this.title = {
      text: 'Estudios por mes'
    };

    this.series = [{
      name: 'Estudios',
      data: this.data
    }];

    this.chart = {
      type: 'bar',
      height: 350,

    }
    this.xaxis= {
      categories: this.labels
    }

  }

}
