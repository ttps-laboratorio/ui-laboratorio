import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-per-study-status',
  templateUrl: './per-study-status.component.html',
  styleUrls: ['./per-study-status.component.css']
})
export class PerStudyStatusComponent implements OnInit {

  series: ApexAxisChartSeries;
  chart: ApexChart;
  title:ApexTitleSubtitle;
  xaxis: ApexXAxis;

  labels: Array<string> = [];
  data: Array<number> = [];

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.reportsService.getStudiesByStudyStatus().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.labels.push(data[i].studyStatusName);
        this.data.push(data[i].studies);
        this.initializeChartOptions();
      }
    });
  }

  private initializeChartOptions(): void {
    this.title = {
      text: 'Estudios por estado del estudio'
    };

    this.series = [{
      name: 'Estudios',
      data: this.data
    }];

    this.chart = {
      type: 'bar',
      height: 450,

    }
    this.xaxis= {
      categories: this.labels
    }

  }

}
