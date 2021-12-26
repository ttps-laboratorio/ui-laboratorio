import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../services/reports.service';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ApexYAxis } from 'ng-apexcharts';

@Component({
  selector: 'app-per-study-type',
  templateUrl: './per-study-type.component.html',
  styleUrls: ['./per-study-type.component.css']
})
export class PerStudyTypeComponent implements OnInit {

  series: ApexAxisChartSeries;
  chart: ApexChart;
  title:ApexTitleSubtitle;
  xaxis: ApexXAxis;

  labels: Array<string> = [];
  data: Array<number> = [];

  constructor(private reportsService: ReportsService) { }

  ngOnInit(): void {
    this.reportsService.getStudiesByStudyType().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.labels.push(data[i].studyTypeName);
        this.data.push(data[i].studies)
      }
    });
    this.initializeChartOptions();
  }

  private initializeChartOptions(): void {
    this.title = {
      text: 'Estudios por tipo'
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
